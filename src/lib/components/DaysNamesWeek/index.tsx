import * as listOfLanguage from "date-fns/esm/locale";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

/**
 * This component represents all the days of the week.
 * @returns JSX
 */
const DaysNamesWeek = () => {
  const calendarContext = useContext(CalendarContext);

  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item) => item === calendarContext.language
  );

  const weekdays = Array.from(Array(7).keys()).map((i) => {
    // @ts-ignore
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
