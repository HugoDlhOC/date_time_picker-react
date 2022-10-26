import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";

const Calendar = ({ language }) => {
  //context
  const { date, dispatch } = useContext(DateContext);
  console.log(language);
  console.log(date);
  return (
    <div>
      <Navigation />
      <CalendarBody />
    </div>
  );
};

export default Calendar;
