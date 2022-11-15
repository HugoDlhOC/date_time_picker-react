import { useSelector } from "react-redux";
import * as listOfLanguage from "date-fns/esm/locale";
import { RootState } from "../../app/store";
import React from "react";

/**
 * This component represents all the days of the week.
 * @returns JSX
 */
const DaysNamesWeek = () => {
  //redux
  const choiceUserLanguage = useSelector(
    (state: RootState) => state.calendar.language
  );

  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item) => item === choiceUserLanguage
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
