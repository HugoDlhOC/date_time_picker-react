import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import { LanguageContext } from "../../context/LanguageContext";
import { ReturnDateContext } from "../../context/ReturnDateContext";

const Calendar = ({ languageChoice }) => {
  //context
  const { setLanguage } = useContext(LanguageContext);
  setLanguage(languageChoice);

  //context
  const { returnDate } = useContext(ReturnDateContext);

  const [isOpen, setIsOpen] = useState(false);

  const openCalendar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={"input-calendar"}>
      <input type={"text"} onClick={openCalendar} value={returnDate} />
      <div className={"calendar"}>
        <Navigation isOpen={isOpen} />
        <CalendarBody isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Calendar;
