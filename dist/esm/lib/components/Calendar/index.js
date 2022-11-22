import React from "react";
import { CalendarContextProvider } from "../../context/CalendarContext";
import CalendarComponent from "../CalendarComponent";
var Calendar = function (props) {
    return (React.createElement(CalendarContextProvider, null,
        React.createElement(CalendarComponent, { languageChoice: props.languageChoice, yearMin: props.yearMin, yearMax: props.yearMax, returnFormat: props.returnFormat, defaultDate: props.defaultDate, labelContent: props.labelContent, classChange: props.classChange, nameInput: props.nameInput, idCalendar: props.idCalendar, idMonthSelect: props.idMonthSelect, idYearSelect: props.idYearSelect })));
};
export default Calendar;
//# sourceMappingURL=index.js.map