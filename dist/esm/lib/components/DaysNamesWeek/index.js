import * as listOfLanguage from "date-fns/esm/locale";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
/**
 * This component represents all the days of the week.
 * @returns JSX
 */
var DaysNamesWeek = function () {
    var calendarContext = useContext(CalendarContext);
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === calendarContext.language; });
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