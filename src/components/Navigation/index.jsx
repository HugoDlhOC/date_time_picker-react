import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Navigation = ({ isOpen }) => {
  const date = useSelector((state) => state.calendar.date);
  const dateConvert = new Date(date);

  const yearMin = useSelector((state) => state.calendar.yearMin);
  const yearMax = useSelector((state) => state.calendar.yearMax);

  return (
    <nav
      className={
        isOpen === true ? "navigation-datepicker" : "navigation-datepicker hide"
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
