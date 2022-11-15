"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_redux_1 = require("react-redux");
var listOfLanguage = tslib_1.__importStar(require("date-fns/esm/locale"));
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * This component represents all the days of the week.
 * @returns JSX
 */
var DaysNamesWeek = function () {
    //redux
    var choiceUserLanguage = (0, react_redux_1.useSelector)(function (state) { return state.calendar.language; });
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === choiceUserLanguage; });
    var weekdays = Array.from(Array(7).keys()).map(function (i) {
        // @ts-ignore
        return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.day(i, {
            width: "abbreviated"
        });
    });
    return (react_1["default"].createElement("div", { className: "week-cells" }, weekdays.map(function (item, key) { return (react_1["default"].createElement("span", { className: "cell name-day-week", key: key }, item)); })));
};
exports["default"] = DaysNamesWeek;
//# sourceMappingURL=index.js.map