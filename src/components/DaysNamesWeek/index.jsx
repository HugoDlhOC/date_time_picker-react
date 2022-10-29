import { enUS, es, fr } from "date-fns/esm/locale";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useSelector } from "react-redux";
const DaysNamesWeek = () => {
  //context
  //const { language } = useContext(LanguageContext);
  const language = useSelector((state) => state.calendar.language);

  const weekdays = [...Array(7).keys()].map((i) => {
    return language.localize.day(i, { width: "abbreviated" });
  });
  return (
    <div className={"week-cells"}>
      {weekdays.map((item) => (
        <span className={"cell name-day-week"}>{item}</span>
      ))}
    </div>
  );
};

export default DaysNamesWeek;
