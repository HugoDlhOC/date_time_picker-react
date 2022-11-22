//@ts-ignore
import React, { createContext, useState } from "react";
export var CalendarContext = createContext(null);
export var CalendarContextProvider = function (props) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(new Date().toISOString()), date = _b[0], setDate = _b[1];
    var _c = useState("enUS"), language = _c[0], setLanguage = _c[1];
    var _d = useState(""), returnDate = _d[0], setReturnDate = _d[1];
    var _e = useState(new Date().getFullYear() - 50), yearMin = _e[0], setYearMin = _e[1];
    var _f = useState(new Date().getFullYear() + 50), yearMax = _f[0], setYearMax = _f[1];
    var _g = useState("MM/dd/yyyy"), returnFormat = _g[0], setReturnFormat = _g[1];
    var _h = useState("years"), idYearSelect = _h[0], setIdYearSelect = _h[1];
    var _j = useState("months"), idMonthSelect = _j[0], setIdMonthSelect = _j[1];
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
        setReturnFormat: setReturnFormat,
        idYearSelect: idYearSelect,
        setIdYearSelect: setIdYearSelect,
        idMonthSelect: idMonthSelect,
        setIdMonthSelect: setIdMonthSelect
    };
    return (React.createElement(CalendarContext.Provider, { value: value }, props.children));
};
export default CalendarContext;
//# sourceMappingURL=CalendarContext.js.map