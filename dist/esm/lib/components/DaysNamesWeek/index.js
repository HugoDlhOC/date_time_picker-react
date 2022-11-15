import { useSelector } from "react-redux";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
/**
 * This component represents all the days of the week.
 * @returns JSX
 */
var DaysNamesWeek = function () {
    //redux
    var choiceUserLanguage = useSelector(function (state) { return state.calendar.language; });
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === choiceUserLanguage; });
    var weekdays = Array.from(Array(7).keys()).map(function (i) {
        // @ts-ignore
        return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.day(i, {
            width: "abbreviated"
        });
    });
    return (React.createElement("div", { className: "week-cells" }, weekdays.map(function (item, key) { return (React.createElement("span", { className: "cell name-day-week", key: key }, item)); })));
};
export default DaysNamesWeek;
//# sourceMappingURL=index.js.map