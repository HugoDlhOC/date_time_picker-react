import { enUS, es, fr } from "date-fns/esm/locale";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
const DaysNamesWeek = () => {
  //context
  const { language } = useContext(LanguageContext);

  const weekdays = [...Array(7).keys()].map((i) => {
    switch (language) {
      case "fr":
        return fr.localize.day(i, { width: "abbreviated" });
      case "es":
        return es.localize.day(i, { width: "abbreviated" });
      default:
        return enUS.localize.day(i, { width: "abbreviated" });
    }
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
