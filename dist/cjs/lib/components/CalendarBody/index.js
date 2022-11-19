"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var allDaysCurrentMonth_1 = tslib_1.__importDefault(require("../../services/allDaysCurrentMonth"));
var allSundayCurrentMonth_1 = tslib_1.__importDefault(require("../../services/allSundayCurrentMonth"));
var sortWeeksCalendar_1 = tslib_1.__importDefault(require("../../services/sortWeeksCalendar"));
var DaysNamesWeek_1 = tslib_1.__importDefault(require("../DaysNamesWeek"));
var date_fns_1 = require("date-fns");
var react_1 = tslib_1.__importStar(require("react"));
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
/**
 * This component represents the body of the calendar (all selecting days).
 * @returns JSX
 */
var CalendarBody = function () {
    var calendarContext = (0, react_1.useContext)(CalendarContext_1["default"]);
    // @ts-ignore
    var objDate = new Date(calendarContext.date);
    //number of days in the current month
    var totalOfDaysThisMonth = (0, allDaysCurrentMonth_1["default"])(objDate);
    //determine the number of Sundays in the month
    var allSundayCurrentMonthNumber = (0, allSundayCurrentMonth_1["default"])(objDate, totalOfDaysThisMonth);
    //sorting for a good organization of the days of the week
    var sortWeeks = (0, sortWeeksCalendar_1["default"])(objDate, allSundayCurrentMonthNumber, totalOfDaysThisMonth);
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
        calendarContext.setReturnDate((0, date_fns_1.format)(clickDate, calendarContext.returnFormat));
        //context
        // @ts-ignore
        calendarContext.setIsOpen(false);
    };
    return (
    //@ts-ignore
    react_1["default"].createElement("div", { className: calendarContext.isOpen === true ? "body-calendar" : "body-calendar hide" },
        react_1["default"].createElement(DaysNamesWeek_1["default"], null),
        react_1["default"].createElement("div", { className: "first-days-cells" },
            react_1["default"].createElement("div", { className: "row" },
                sortWeeks[0].values.length !== 7
                    ? sortWeeks[0].values.map(function (item, key) {
                        return (react_1["default"].createElement("div", { className: "cell previous", key: key },
                            react_1["default"].createElement("button", { "aria-label": "Date Element", onClick: function () { return handleDisplayDate("previous", item); }, type: "button" }, item)));
                    })
                    : "",
                sortWeeks[1].values.map(function (item, key) {
                    return (react_1["default"].createElement("div", { className: "cell", key: key },
                        react_1["default"].createElement("button", { type: "button", className: objDate.getMonth() === new Date().getMonth() &&
                                objDate.getFullYear() === new Date().getFullYear() &&
                                item === new Date().getDate()
                                ? "button-today"
                                : "", onClick: function () { return handleDisplayDate("current", item); }, "aria-label": "Date Element" }, item)));
                }))),
        react_1["default"].createElement("div", { className: "day-cells" }, sortWeeks[2].values.map(function (item, key) {
            return (react_1["default"].createElement("div", { className: "row", key: key }, item.values.map(function (dateItem, key) {
                return (react_1["default"].createElement("div", { className: "cell", key: key },
                    react_1["default"].createElement("button", { type: "button", className: objDate.getMonth() === new Date().getMonth() &&
                            objDate.getFullYear() === new Date().getFullYear() &&
                            dateItem === new Date().getDate()
                            ? "button-today"
                            : "", onClick: function () { return handleDisplayDate("current", dateItem); }, "aria-label": "Date Element" }, dateItem)));
            })));
        })),
        react_1["default"].createElement("div", { className: "last-days-cells" },
            react_1["default"].createElement("div", { className: "row" },
                sortWeeks[3].values.map(function (item, key) {
                    return (react_1["default"].createElement("div", { className: "cell", key: key },
                        react_1["default"].createElement("button", { type: "button", className: objDate.getMonth() === new Date().getMonth() &&
                                objDate.getFullYear() === new Date().getFullYear() &&
                                item === new Date().getDate()
                                ? "button-today"
                                : "", onClick: function () { return handleDisplayDate("current", item); }, "aria-label": "Date Element" }, item)));
                }),
                sortWeeks[3].values.length !== 0
                    ? sortWeeks[4].values.map(function (item, key) {
                        return (react_1["default"].createElement("div", { className: "cell after", key: key },
                            react_1["default"].createElement("button", { type: "button", "aria-label": "Date Element", onClick: function () { return handleDisplayDate("next", item); } }, item)));
                    })
                    : "")),
        react_1["default"].createElement("div", { className: "number-week-cells" })));
};
exports["default"] = CalendarBody;
//# sourceMappingURL=index.js.map