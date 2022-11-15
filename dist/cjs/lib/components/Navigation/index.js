"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var HomeButton_1 = tslib_1.__importDefault(require("../HomeButton"));
var NextButton_1 = tslib_1.__importDefault(require("../NextButton"));
var PreviousButton_1 = tslib_1.__importDefault(require("../PreviousButton"));
var MonthSelect_1 = tslib_1.__importDefault(require("../MonthSelect"));
var YearSelect_1 = tslib_1.__importDefault(require("../YearSelect"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * This component represents the whole navigation of the calendar, directional arrows to go to the month before or the month after, and the home button. The 2 selects (months and years) are also present.
 * @param isOpen
 * @returns JSX
 */
var Navigation = function (props) {
    var date = (0, react_redux_1.useSelector)(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    var yearMin = (0, react_redux_1.useSelector)(function (state) { return state.calendar.yearMin; });
    var yearMax = (0, react_redux_1.useSelector)(function (state) { return state.calendar.yearMax; });
    return (react_1["default"].createElement("nav", { className: props.isOpen === true
            ? "navigation-datepicker"
            : "navigation-datepicker hide" },
        dateConvert.getFullYear() === yearMin && dateConvert.getMonth() === 0 ? ("") : (react_1["default"].createElement(PreviousButton_1["default"], null)),
        react_1["default"].createElement(HomeButton_1["default"], null),
        react_1["default"].createElement(MonthSelect_1["default"], null),
        react_1["default"].createElement(YearSelect_1["default"], null),
        dateConvert.getFullYear() === yearMax &&
            dateConvert.getMonth() === 11 ? ("") : (react_1["default"].createElement(NextButton_1["default"], null))));
};
exports["default"] = Navigation;
Navigation.propTypes = {
    isOpen: prop_types_1["default"].bool
};
//# sourceMappingURL=index.js.map