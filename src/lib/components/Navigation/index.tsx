import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

interface NavigationDemo {
  isOpen: boolean;
}

/**
 * This component represents the whole navigation of the calendar, directional arrows to go to the month before or the month after, and the home button. The 2 selects (months and years) are also present.
 * @param isOpen
 * @returns JSX
 */
const Navigation = (props: NavigationDemo) => {
  const calendarContext = useContext(CalendarContext);

  const dateConvert = new Date(calendarContext.date);

  return (
    <nav
      className={
        props.isOpen === true
          ? "navigation-datepicker"
          : "navigation-datepicker hide"
      }
    >
      {dateConvert.getFullYear() === calendarContext.yearMin &&
      dateConvert.getMonth() === 0 ? (
        ""
      ) : (
        <PreviousButton />
      )}
      <HomeButton />
      <MonthSelect />
      <YearSelect />
      {dateConvert.getFullYear() === calendarContext.yearMax &&
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
