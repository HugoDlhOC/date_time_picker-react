import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";
import { LanguageContext } from "../../context/LanguageContext";

const Calendar = ({ languageChoice }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  setLanguage(languageChoice);
  console.log(language);
  return (
    <div>
      <Navigation />
      <CalendarBody />
    </div>
  );
};

export default Calendar;
