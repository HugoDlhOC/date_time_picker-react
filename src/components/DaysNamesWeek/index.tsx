import { useSelector } from "react-redux";
import * as listOfLanguage from "date-fns/esm/locale";

/**
 * This component represents all the days of the week.
 * @returns JSX
 */
const DaysNamesWeek = () => {
  //redux
  const choiceUserLanguage = useSelector((state) => state.calendar.language);

  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item, index) => item === choiceUserLanguage
  );

  const weekdays = [...Array(7).keys()].map((i) => {
    return listOfLanguage[
      Object.keys(listOfLanguage)[indexListOfLanguage]
    ].localize.day(i, {
      width: "abbreviated",
    });
  });

  return (
    <div className={"week-cells"}>
      {weekdays.map((item, key) => (
        <span className={"cell name-day-week"} key={key}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default DaysNamesWeek;
