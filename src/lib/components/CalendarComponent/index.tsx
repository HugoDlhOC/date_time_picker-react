import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { format } from "date-fns";
import { SetStateAction, useEffect } from "react";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
import { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
import defineYearsSelect from "../../services/defineYearsSelect";
import { nanoid } from "nanoid";

interface CalendarDemoRequiredProps {
  languageChoice: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
  defaultDate: Date;
  labelContent: string;
}

interface CalendarDemoOptionalProps {
  classChange?: string;
  nameInput?: string;
  handleDateChanged?: (e: any) => void;
}

interface CalendarDemo
  extends CalendarDemoRequiredProps,
    CalendarDemoOptionalProps {}

interface FocusEvent<T = Element> {
  currentTarget: any;
  relatedTarget: EventTarget | null;
  target: EventTarget & T;
}

const MAX_YEAR = 1000;
/**
 * This component represents the entire calendar.
 * @param languageChoice
 * @param yearMin
 * @param yearMax
 * @param returnFormat
 * @param classChange
 * @param defaultDate
 * @param labelContent
 * @param nameInput
 * @returns JSX
 */
const CalendarComponent = (props: CalendarDemo) => {
  const calendarContext = useContext(CalendarContext);

  //control clicks if multiples calendar are present
  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget;

    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        calendarContext.setIsOpen(false);
      }
    });
  };

  //CONTROL
  //YEARS
  const yearMinConvert: number = parseInt(String(props.yearMin));
  const yearMaxConvert: number = parseInt(String(props.yearMax));

  const date = new Date();
  if (yearMinConvert < date.getFullYear() - MAX_YEAR) {
    throw new Error(
      "The given value is too low, it cannot be lower than the current year - 1000"
    );
  }

  if (yearMaxConvert > date.getFullYear() + MAX_YEAR) {
    throw new Error(
      "The given value is too high, it cannot be higher than the current year + 1000"
    );
  }

  if (props.yearMin > props.yearMax) {
    throw new Error("The yearMin value can't be bigger than yearMax value");
  }

  const controlPresentCurrentYear = defineYearsSelect(
    props.yearMin,
    props.yearMax
  );

  const valueControl = controlPresentCurrentYear.filter(
    (item) => item.value === new Date().getFullYear()
  );
  if (valueControl.length === 0)
    throw new Error(
      "In your interval of yearMin and yearMax, the current year is not present"
    );

  //LANGUAGE
  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item) => item === props.languageChoice
  );

  if (indexListOfLanguage === -1) {
    throw new Error(
      "language not found, inspect date-fns documentation for a list of languages available"
    );
  }

  useEffect(() => {
    calendarContext.setLanguage(props.languageChoice);
    calendarContext.setReturnFormat(props.returnFormat);
    calendarContext.setYearMin(yearMinConvert);
    calendarContext.setYearMax(yearMaxConvert);
  }, []);

  useEffect(() => {
    try {
      if (props.defaultDate === undefined) {
        calendarContext.setReturnDate(format(new Date(), props.returnFormat));
      } else {
        calendarContext.setReturnDate(
          format(props.defaultDate, props.returnFormat)
        );
      }
    } catch (e) {
      throw new Error(
        "The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns."
      );
    }
  }, []);

  const onChangeInput = (e: {
    target: { value: SetStateAction<undefined> };
  }) => {
    calendarContext.setReturnDate(e.target.value);
    props.handleDateChanged(e.target.value);
  };

  //unique id
  const idCalendar = nanoid();

  return (
    <div
      className={
        props.classChange === undefined
          ? "input-calendar"
          : `input-calendar ${props.classChange}`
      }
      //@ts-ignore
      onBlur={handleOnBlur}
    >
      <label htmlFor={idCalendar}>{props.labelContent}</label>
      <input
        type={"text"}
        onClick={() => calendarContext.setIsOpen(!calendarContext.isOpen)}
        // @ts-ignore
        onChange={onChangeInput}
        value={calendarContext.returnDate}
        role={"textbox"}
        id={idCalendar}
        data-testid={"input-calendar"}
        name={props.nameInput}
        className={
          calendarContext.isOpen
            ? "input-element input-calendar-open"
            : "input-element input-calendar-close"
        }
      />
      <div className={"calendar"} data-testid={"calendar"}>
        <Navigation isOpen={calendarContext.isOpen} />
        <CalendarBody />
      </div>
    </div>
  );
};

export default CalendarComponent;
