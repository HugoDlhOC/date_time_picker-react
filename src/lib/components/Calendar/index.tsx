// @ts-ignore
import Navigation from "../Navigation/index.tsx";
// @ts-ignore
import CalendarBody from "../CalendarBody/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  changeLanguage,
  changeReturnFormat,
  defineYearsInterval,
  openCalendar,
} from "../../feature/calendarSlice";

interface CalendarDemo {
  languageChoice: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
}
/**
 * This component represents the entire calendar.
 * @param languageChoice
 * @param yearMin
 * @param yearMax
 * @param returnFormat
 * @returns JSX
 */
const Calendar = (props: CalendarDemo) => {
  //CONTROL
  const yearMinConvert = parseInt(props.yearMin);
  const yearMaxConvert = parseInt(props.yearMax);

  const date = new Date();
  if (yearMinConvert < date.getFullYear() - 1000) {
    throw new Error(
      "The given value is too low, it cannot be lower than the current year - 1000"
    );
  }

  if (yearMaxConvert > date.getFullYear() + 1000) {
    throw new Error(
      "The given value is too high, it cannot be higher than the current year + 1000"
    );
  }

  //redux
  const dispatch = useDispatch();

  //redux
  dispatch(changeLanguage({ language: props.languageChoice }));

  //redux
  const returnDate = useSelector((state) => state.calendar.returnDate);

  //redux
  dispatch(changeReturnFormat({ returnFormat: props.returnFormat }));

  const isOpen = useSelector((state) => state.calendar.isOpen);

  dispatch(
    defineYearsInterval({ yearMin: yearMinConvert, yearMax: yearMaxConvert })
  );
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
