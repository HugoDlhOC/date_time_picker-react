"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var CalendarContext_1 = require("../../context/CalendarContext");
var CalendarComponent_1 = tslib_1.__importDefault(require("../CalendarComponent"));
var Calendar = function (props) {
    return (react_1["default"].createElement(CalendarContext_1.CalendarContextProvider, null,
        react_1["default"].createElement(CalendarComponent_1["default"], { languageChoice: props.languageChoice, yearMin: props.yearMin, yearMax: props.yearMax, returnFormat: props.returnFormat, defaultDate: props.defaultDate, labelContent: props.labelContent, classChange: props.classChange })));
};
exports["default"] = Calendar;
//# sourceMappingURL=index.js.map