import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";
import { YearsIntervalContext } from "../../context/YearsIntervalContext";
import { useSelector } from "react-redux";

const Navigation = ({ isOpen }) => {
  //context
  //const { date } = useContext(DateContext);
  const date = useSelector((state) => state.calendar.date);

  //context
  //const { yearsInterval } = useContext(YearsIntervalContext);
  const yearMin = useSelector((state) => state.calendar.yearMin);
  const yearMax = useSelector((state) => state.calendar.yearMax);

  return (
    <nav
      className={
        isOpen === true ? "navigation-datepicker" : "navigation-datepicker hide"
      }
    >
      {date.getFullYear() === yearMin && date.getMonth() === 0 ? (
        ""
      ) : (
        <PreviousButton />
      )}
      <HomeButton />
      <MonthSelect />
      <YearSelect />
      {date.getFullYear() === yearMax && date.getMonth() === 11 ? (
        ""
      ) : (
        <NextButton />
      )}
    </nav>
  );
};

export default Navigation;
