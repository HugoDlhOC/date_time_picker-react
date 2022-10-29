import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ReturnDateContext } from "../../context/ReturnDateContext";
import { YearsIntervalContext } from "../../context/YearsIntervalContext";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguage,
  defineReturnDate,
  defineYearsInterval,
  openCalendar,
} from "../../feature/calendarSlice";

const Calendar = ({ languageChoice, intervalBefore, intervalAfter }) => {
  //redux
  const dispatch = useDispatch();

  //context
  //const { setLanguage } = useContext(LanguageContext);
  //setLanguage(languageChoice);
  //redux
  dispatch(changeLanguage({ language: languageChoice }));

  //context
  //const { returnDate } = useContext(ReturnDateContext);
  //redux
  const returnDate = useSelector((state) => state.calendar.returnDate);

  //context
  //const { setYearsInterval } = useContext(YearsIntervalContext);

  const [setIsOpen] = useState(false);
  const isOpen = useSelector((state) => state.calendar.isOpen);

  //définir avec redux !!
  //setYearsInterval({ yearMin: intervalBefore, yearMax: intervalAfter });
  dispatch(
    defineYearsInterval({ yearMin: intervalBefore, yearMax: intervalAfter })
  );
  const handleOpenCalendar = () => {
    dispatch(openCalendar({ isOpen: !isOpen }));
    //setIsOpen(!isOpen);
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
