import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { SetStateAction, useEffect } from "react";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
import { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

interface CalendarDemoRequiredProps {
  languageChoice: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
  defaultDate: Date;
  labelContent: string;
}

interface CalendarDemoOptionalProps {
  classToggle?: string;
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
 * @returns JSX
 */
const CalendarComponent = (props: CalendarDemo) => {
  const calendarContext = useContext(CalendarContext);

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

  //attention : il faut bien prendre compte que le mois de janvier correspond à 0 pour ce props et 11 à décembre, sinon incrémentation d'une année...
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

  //const isOpen = useSelector((state: RootState) => state.calendar.isOpen);

  const handleOpenCalendar = () => {
    calendarContext.setIsOpen(!calendarContext.isOpen);
  };

  const onChangeInput = (e: {
    target: { value: SetStateAction<undefined> };
  }) => {
    calendarContext.setReturnDate(e.target.value);
  };

  return (
    // @ts-ignore
    <div className={"input-calendar"}>
      <label htmlFor={"input-calendar"}>{props.labelContent}</label>
      <input
        type={"text"}
        onClick={handleOpenCalendar}
        // @ts-ignore
        onChange={onChangeInput}
        value={calendarContext.returnDate}
        role={"textbox"}
        id={"input-calendar"}
      />
      <div
        className={
          props.classToggle === undefined ? "calendar" : props.classToggle
        }
        data-testid={"calendar"}
      >
        {/*@ts-ignore*/}
        <Navigation isOpen={calendarContext.isOpen} />
        <CalendarBody />
      </div>
    </div>
  );
};

export default CalendarComponent;

CalendarComponent.propTypes = {
  languageChoice: PropTypes.any,
  yearMin: PropTypes.number,
  yearMax: PropTypes.number,
  returnFormat: PropTypes.string,
};
