"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_select_1 = tslib_1.__importDefault(require("react-select"));
var defineYearsSelect_1 = tslib_1.__importDefault(require("../../services/defineYearsSelect"));
var react_1 = tslib_1.__importStar(require("react"));
var configStyleYearSelect_1 = tslib_1.__importDefault(require("../../services/configStyleYearSelect"));
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
/**
 * An interval has been defined by the developer per props.
 * @returns JSX
 */
var YearSelect = function () {
    var calendarContext = (0, react_1.useContext)(CalendarContext_1["default"]);
    var dateConvert = new Date(calendarContext.date);
    var years = (0, defineYearsSelect_1["default"])(calendarContext.yearMin, calendarContext.yearMax);
    //change of year
    var handleSelectChangeYear = function (option) {
        var saveDate = dateConvert;
        saveDate.setFullYear(option.value);
        calendarContext.setDate(new Date(saveDate).toISOString());
        calendarContext.setYearMin(years[0].value);
        calendarContext.setYearMax(years[years.length - 1].value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("label", { htmlFor: "years" }),
        react_1["default"].createElement(react_select_1["default"], { defaultValue: years.find(function (item) { return item.value === 2022; }), 
            //@ts-ignore
            onChange: handleSelectChangeYear, value: years.find(function (item) { return item.value === dateConvert.getFullYear(); }), options: years, isSearchable: false, isClearable: false, "data-testid": "years-select", id: "years", "aria-label": "years", styles: configStyleYearSelect_1["default"] })));
};
exports["default"] = YearSelect;
//# sourceMappingURL=index.js.map