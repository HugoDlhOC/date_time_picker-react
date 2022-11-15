import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  changeLanguage,
  changeReturnFormat,
  defineYearsInterval,
  openCalendar,
  defineReturnDate,
} from "../../feature/calendarSlice";
import { format } from "date-fns";
import { SetStateAction, useEffect } from "react";
import { RootState } from "../../app/store";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";

interface CalendarDemo {
  languageChoice: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
  classToggle: string;
  defaultDate: Date;
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
 * @returns JSX
 */
const CalendarComponent = (props: CalendarDemo) => {
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
  const dispatch = useDispatch();

  //redux
  dispatch(changeLanguage({ language: props.languageChoice }));

  //redux
  const returnDate = useSelector(
    (state: RootState) => state.calendar.returnDate
  );

  //redux
  dispatch(changeReturnFormat({ returnFormat: props.returnFormat }));

  //attention : il faut bien prendre compte que le mois de janvier correspond à 0 pour ce props et 11 à décembre, sinon incrémentation d'une année...
  useEffect(() => {
    try {
      if (props.defaultDate === undefined) {
        dispatch(
          defineReturnDate({
            returnDate: format(new Date(), props.returnFormat),
          })
        );
      } else {
        dispatch(
          defineReturnDate({
            returnDate: format(props.defaultDate, props.returnFormat),
          })
        );
      }
    } catch (e) {
      throw new Error(
        "The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns."
      );
    }
  }, []);

  const isOpen = useSelector((state: RootState) => state.calendar.isOpen);

  dispatch(
    defineYearsInterval({ yearMin: yearMinConvert, yearMax: yearMaxConvert })
  );
  const handleOpenCalendar = () => {
    dispatch(openCalendar({ isOpen: !isOpen }));
  };

  const onChangeInput = (e: {
    target: { value: SetStateAction<undefined> };
  }) => {
    dispatch(defineReturnDate({ returnDate: e.target.value }));
  };

  return (
    <div className={"input-calendar"}>
      <label htmlFor={"input-calendar"}>Date</label>
      <input
        type={"text"}
        onClick={handleOpenCalendar}
        // @ts-ignore
        onChange={onChangeInput}
        value={returnDate}
        role={"textbox"}
        id={"input-calendar"}
      />
      <div
        className={
          props.classToggle === undefined ? "calendar" : props.classToggle
        }
        data-testid={"calendar"}
      >
        <Navigation isOpen={isOpen} />
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
