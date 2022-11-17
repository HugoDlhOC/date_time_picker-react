"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_select_1 = tslib_1.__importDefault(require("react-select"));
var react_redux_1 = require("react-redux");
var calendarSlice_1 = require("../../feature/calendarSlice");
var listOfLanguage = tslib_1.__importStar(require("date-fns/esm/locale"));
var react_1 = tslib_1.__importDefault(require("react"));
var configStyleMonthSelect_1 = tslib_1.__importDefault(require("../../services/configStyleMonthSelect"));
/**
 * This component represents the select offering the different months that the user can select.
 * @returns JSX
 */
var MonthSelect = function () {
    //redux
    var dispatch = (0, react_redux_1.useDispatch)();
    //redux
    var date = (0, react_redux_1.useSelector)(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    var choiceUserLanguage = (0, react_redux_1.useSelector)(function (state) { return state.calendar.language; });
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === choiceUserLanguage; });
    //definition of the list of months for the select
    var monthsNames = Array.from(Array(12).keys()).map(function (i) {
        // @ts-ignore
        return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
    });
    var months = [];
    monthsNames.map(function (item, index) { return months.push({ label: item, value: index }); });
    //month change
    var handleSelectChangeMonth = function (option) {
        var saveDate = new Date(date);
        saveDate.setMonth(option.value);
        dispatch((0, calendarSlice_1.changeDate)({ date: new Date(saveDate).toISOString() }));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("label", { htmlFor: "months" }),
        react_1["default"].createElement(react_select_1["default"], { defaultValue: months.find(function (item) { return item.value === dateConvert.getMonth(); }), value: months.find(function (item) { return item.value === dateConvert.getMonth(); }), onChange: handleSelectChangeMonth, options: months, isSearchable: false, isClearable: false, "data-testid": "months-select", id: "months", "aria-label": "months", styles: configStyleMonthSelect_1["default"] })));
};
exports["default"] = MonthSelect;
//# sourceMappingURL=index.js.map