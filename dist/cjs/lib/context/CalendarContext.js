"use strict";
exports.__esModule = true;
exports.CalendarContextProvider = exports.CalendarContext = void 0;
var tslib_1 = require("tslib");
//@ts-ignore
var react_1 = tslib_1.__importStar(require("react"));
exports.CalendarContext = (0, react_1.createContext)(null);
var CalendarContextProvider = function (props) {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = (0, react_1.useState)(new Date().toISOString()), date = _b[0], setDate = _b[1];
    var _c = (0, react_1.useState)("enUS"), language = _c[0], setLanguage = _c[1];
    var _d = (0, react_1.useState)(""), returnDate = _d[0], setReturnDate = _d[1];
    var _e = (0, react_1.useState)(new Date().getFullYear() - 50), yearMin = _e[0], setYearMin = _e[1];
    var _f = (0, react_1.useState)(new Date().getFullYear() + 50), yearMax = _f[0], setYearMax = _f[1];
    var _g = (0, react_1.useState)("MM/dd/yyyy"), returnFormat = _g[0], setReturnFormat = _g[1];
    var value = {
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        date: date,
        setDate: setDate,
        language: language,
        setLanguage: setLanguage,
        returnDate: returnDate,
        setReturnDate: setReturnDate,
        yearMin: yearMin,
        setYearMin: setYearMin,
        yearMax: yearMax,
        setYearMax: setYearMax,
        returnFormat: returnFormat,
        setReturnFormat: setReturnFormat
    };
    return (react_1["default"].createElement(exports.CalendarContext.Provider, { value: value }, props.children));
};
exports.CalendarContextProvider = CalendarContextProvider;
exports["default"] = exports.CalendarContext;
//# sourceMappingURL=CalendarContext.js.map