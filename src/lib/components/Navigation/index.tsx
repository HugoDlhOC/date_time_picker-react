import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import React from "react";

interface NavigationDemo {
  isOpen: boolean;
}

/**
 * This component represents the whole navigation of the calendar, directional arrows to go to the month before or the month after, and the home button. The 2 selects (months and years) are also present.
 * @param isOpen
 * @returns JSX
 */
const Navigation = (props: NavigationDemo) => {
  const date = useSelector((state: RootState) => state.calendar.date);
  const dateConvert = new Date(date);
  const yearMin = useSelector((state: RootState) => state.calendar.yearMin);
  const yearMax = useSelector((state: RootState) => state.calendar.yearMax);

  return (
    <nav
      className={
        props.isOpen === true
          ? "navigation-datepicker"
          : "navigation-datepicker hide"
      }
    >
      {dateConvert.getFullYear() === yearMin && dateConvert.getMonth() === 0 ? (
        ""
      ) : (
        <PreviousButton />
      )}
      <HomeButton />
      <MonthSelect />
      <YearSelect />
      {dateConvert.getFullYear() === yearMax &&
      dateConvert.getMonth() === 11 ? (
        ""
      ) : (
        <NextButton />
      )}
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  isOpen: PropTypes.bool,
};
