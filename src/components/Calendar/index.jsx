import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  changeLanguage,
  changeReturnFormat,
  defineYearsInterval,
  openCalendar,
} from "../../feature/calendarSlice";

const Calendar = ({ languageChoice, yearMin, yearMax, returnFormat }) => {
  //redux
  const dispatch = useDispatch();

  //redux
  dispatch(changeLanguage({ language: languageChoice }));

  //redux
  const returnDate = useSelector((state) => state.calendar.returnDate);

  //redux
  dispatch(changeReturnFormat({ returnFormat }));

  const isOpen = useSelector((state) => state.calendar.isOpen);

  dispatch(defineYearsInterval({ yearMin, yearMax }));
  const handleOpenCalendar = () => {
    dispatch(openCalendar({ isOpen: !isOpen }));
  };
  return (
    <div className={"input-calendar"}>
      <input type={"text"} onClick={handleOpenCalendar} value={returnDate} />
      <div className={"calendar"}>
        <Navigation isOpen={isOpen} />
        <CalendarBody />
      </div>
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  languageChoice: PropTypes.any,
  yearMin: PropTypes.number,
  yearMax: PropTypes.number,
  returnFormat: PropTypes.string,
};
