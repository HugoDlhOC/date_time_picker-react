"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_select_1 = tslib_1.__importDefault(require("react-select"));
var defineYearsSelect_1 = tslib_1.__importDefault(require("../../services/defineYearsSelect"));
var react_redux_1 = require("react-redux");
var calendarSlice_1 = require("../../feature/calendarSlice");
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * An interval has been defined by the developer per props.
 * @returns JSX
 */
var YearSelect = function () {
    //redux
    var dispatch = (0, react_redux_1.useDispatch)();
    var date = (0, react_redux_1.useSelector)(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    var yearMin = (0, react_redux_1.useSelector)(function (state) { return state.calendar.yearMin; });
    var yearMax = (0, react_redux_1.useSelector)(function (state) { return state.calendar.yearMax; });
    var years = (0, defineYearsSelect_1["default"])(yearMin, yearMax);
    //change of year
    var handleSelectChangeYear = function (option) {
        var saveDate = dateConvert;
        saveDate.setFullYear(option.value);
        dispatch((0, calendarSlice_1.changeDate)({ date: new Date(saveDate).toISOString() }));
        dispatch((0, calendarSlice_1.defineYearsInterval)({
            yearMin: years[0].value,
            yearMax: years[years.length - 1].value
        }));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_select_1["default"], { defaultValue: years.find(function (item) { return item.value === 2022; }), 
            //@ts-ignore
            onChange: handleSelectChangeYear, value: years.find(function (item) { return item.value === dateConvert.getFullYear(); }), options: years, isSearchable: false, isClearable: false })));
};
exports["default"] = YearSelect;
//# sourceMappingURL=index.js.map