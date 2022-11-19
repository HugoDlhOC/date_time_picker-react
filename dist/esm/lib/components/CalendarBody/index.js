import allDaysCurrentMonth from "../../services/allDaysCurrentMonth";
import allSundayCurrentMonth from "../../services/allSundayCurrentMonth";
import sortWeeksCalendar from "../../services/sortWeeksCalendar";
import DaysNamesWeek from "../DaysNamesWeek";
import { format } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
/**
 * This component represents the body of the calendar (all selecting days).
 * @returns JSX
 */
var CalendarBody = function () {
    var calendarContext = useContext(CalendarContext);
    // @ts-ignore
    var objDate = new Date(calendarContext.date);
    //number of days in the current month
    var totalOfDaysThisMonth = allDaysCurrentMonth(objDate);
    //determine the number of Sundays in the month
    var allSundayCurrentMonthNumber = allSundayCurrentMonth(objDate, totalOfDaysThisMonth);
    //sorting for a good organization of the days of the week
    var sortWeeks = sortWeeksCalendar(objDate, allSundayCurrentMonthNumber, totalOfDaysThisMonth);
    var handleDisplayDate = function (positionMonth, dayNumber) {
        var clickDate = new Date(objDate.getFullYear(), objDate.getMonth(), 1);
        switch (positionMonth) {
            case "previous":
                clickDate.setMonth(clickDate.getMonth() - 1);
                break;
            case "current":
                break;
            case "next":
                clickDate.setMonth(clickDate.getMonth() + 1);
                break;
            default:
                break;
        }
        clickDate.setDate(dayNumber);
        //dispatch(defineReturnDate({ returnDate: format(clickDate, returnFormat) }));
        // @ts-ignore
        calendarContext.setReturnDate(format(clickDate, calendarContext.returnFormat));
        //context
        // @ts-ignore
        calendarContext.setIsOpen(false);
    };
    return (
    //@ts-ignore
    React.createElement("div", { className: calendarContext.isOpen === true ? "body-calendar" : "body-calendar hide" },
        React.createElement(DaysNamesWeek, null),
        React.createElement("div", { className: "first-days-cells" },
            React.createElement("div", { className: "row" },
                sortWeeks[0].values.length !== 7
                    ? sortWeeks[0].values.map(function (item, key) {
                        return (React.createElement("div", { className: "cell previous", key: key },
                            React.createElement("button", { "aria-label": "Date Element", onClick: function () { return handleDisplayDate("previous", item); }, type: "button" }, item)));
                    })
                    : "",
                sortWeeks[1].values.map(function (item, key) {
                    return (React.createElement("div", { className: "cell", key: key },
                        React.createElement("button", { type: "button", className: objDate.getMonth() === new Date().getMonth() &&
                                objDate.getFullYear() === new Date().getFullYear() &&
                                item === new Date().getDate()
                                ? "button-today"
                                : "", onClick: function () { return handleDisplayDate("current", item); }, "aria-label": "Date Element" }, item)));
                }))),
        React.createElement("div", { className: "day-cells" }, sortWeeks[2].values.map(function (item, key) {
            return (React.createElement("div", { className: "row", key: key }, item.values.map(function (dateItem, key) {
                return (React.createElement("div", { className: "cell", key: key },
                    React.createElement("button", { type: "button", className: objDate.getMonth() === new Date().getMonth() &&
                            objDate.getFullYear() === new Date().getFullYear() &&
                            dateItem === new Date().getDate()
                            ? "button-today"
                            : "", onClick: function () { return handleDisplayDate("current", dateItem); }, "aria-label": "Date Element" }, dateItem)));
            })));
        })),
        React.createElement("div", { className: "last-days-cells" },
            React.createElement("div", { className: "row" },
                sortWeeks[3].values.map(function (item, key) {
                    return (React.createElement("div", { className: "cell", key: key },
                        React.createElement("button", { type: "button", className: objDate.getMonth() === new Date().getMonth() &&
                                objDate.getFullYear() === new Date().getFullYear() &&
                                item === new Date().getDate()
                                ? "button-today"
                                : "", onClick: function () { return handleDisplayDate("current", item); }, "aria-label": "Date Element" }, item)));
                }),
                sortWeeks[3].values.length !== 0
                    ? sortWeeks[4].values.map(function (item, key) {
                        return (React.createElement("div", { className: "cell after", key: key },
                            React.createElement("button", { type: "button", "aria-label": "Date Element", onClick: function () { return handleDisplayDate("next", item); } }, item)));
                    })
                    : "")),
        React.createElement("div", { className: "number-week-cells" })));
};
export default CalendarBody;
//# sourceMappingURL=index.js.map