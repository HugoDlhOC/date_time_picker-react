import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { format } from "date-fns";
import { SetStateAction, useEffect } from "react";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
import { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
import { PointerEvent } from "react";
import defineYearsSelect from "../../services/defineYearsSelect";
import { useField } from "formik";

interface CalendarDemoRequiredProps {
  languageChoice: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
  defaultDate: Date;
  labelContent: string;
  nameField: string;
}

interface CalendarDemoOptionalProps {
  classChange?: string;
}

interface CalendarDemo
  extends CalendarDemoRequiredProps,
    CalendarDemoOptionalProps {}

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
 * @param nameField
 * @returns JSX
 */
const CalendarComponent = (props: CalendarDemo) => {
  const [field] = useField(props.nameField);
  const calendarContext = useContext(CalendarContext);

  //control clicks if multiples calendar are present
  useEffect(() => {
    const handleOpenCalendar = (e: PointerEvent<HTMLDivElement>) => {
      const calendarsOpened = document.querySelectorAll(
        ".navigation-datepicker.display"
      );
      let controlClassPresent: Array<any> = [];

      //@ts-ignore
      if (e.path !== undefined) {
        //@ts-ignore
        e.path.forEach((item: any) => {
          if (item.classList !== undefined) {
            item.classList.forEach((itemClass: any) => {
              if (itemClass.includes("input-calendar")) {
                controlClassPresent.push(true);
              }
            });
          }
        });

        //@ts-ignore
        if (
          calendarsOpened.length > 1 ||
          controlClassPresent.find((item) => item === true) === undefined
        ) {
          calendarContext.setIsOpen(false);
        }
      } else {
        calendarContext.setIsOpen(true);
      }
    };

    // @ts-ignore
    document.body.addEventListener("click", handleOpenCalendar);

    // @ts-ignore
    return () => document.body.removeEventListener("click", handleOpenCalendar);
  }, []);

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

  //redux
  useEffect(() => {
    calendarContext.setLanguage(props.languageChoice);
    //redux
    calendarContext.setReturnFormat(props.returnFormat);
    //redux
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
  }, [props.defaultDate]);

  const onChangeInput = (e: {
    target: { value: SetStateAction<undefined> };
  }) => {
    calendarContext.setReturnDate(e.target.value);
  };

  return (
    // @ts-ignore
    <div
      className={
        props.classChange === undefined
          ? "input-calendar"
          : `input-calendar ${props.classChange}`
      }
    >
      <label htmlFor={"input-calendar"}>{props.labelContent}</label>
      <input
        {...field}
        type={"text"}
        onClick={() => calendarContext.setIsOpen(!calendarContext.isOpen)}
        // @ts-ignore
        onChange={onChangeInput}
        value={calendarContext.returnDate}
        role={"textbox"}
        id={"input-calendar"}
        data-testid={"input-calendar"}
        className={
          calendarContext.isOpen
            ? "input-calendar-open"
            : "input-calendar-close"
        }
      />
      <div className={"calendar"} data-testid={"calendar"}>
        {/*@ts-ignore*/}
        <Navigation isOpen={calendarContext.isOpen} />
        <CalendarBody />
      </div>
    </div>
  );
};

export default CalendarComponent;
