import { enUS, es, ru, fr } from "date-fns/esm/locale";
const DaysNamesWeek = () => {
  const weekdays = [...Array(7).keys()].map((i) =>
    es.localize.day(i, { width: "abbreviated" })
  );
  return (
    <div className={"week-cells"}>
      {weekdays.map((item) => (
        <div className={"cell name-day-week"}>{item}</div>
      ))}
    </div>
  );
};

export default DaysNamesWeek;
