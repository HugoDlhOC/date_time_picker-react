import Select from "react-select";
import * as listOfLanguage from "date-fns/esm/locale";
import React, { useContext } from "react";
import styleMonthSelect from "../../services/configStyleMonthSelect";
import CalendarContext from "../../context/CalendarContext";
/**
 * This component represents the select offering the different months that the user can select.
 * @returns JSX
 */
var MonthSelect = function () {
    var calendarContext = useContext(CalendarContext);
    var dateConvert = new Date(calendarContext.date);
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === calendarContext.language; });
    //definition of the list of months for the select
    var monthsNames = Array.from(Array(12).keys()).map(function (i) {
        // @ts-ignore
        return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
    });
    var months = [];
    monthsNames.map(function (item, index) { return months.push({ label: item, value: index }); });
    //month change
    var handleSelectChangeMonth = function (option) {
        var saveDate = new Date(calendarContext.date);
        saveDate.setMonth(option.value);
        calendarContext.setDate(new Date(saveDate).toISOString());
    };
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "months" }),
        React.createElement(Select, { defaultValue: months.find(function (item) { return item.value === dateConvert.getMonth(); }), value: months.find(function (item) { return item.value === dateConvert.getMonth(); }), onChange: handleSelectChangeMonth, options: months, isSearchable: false, isClearable: false, "data-testid": "months-select", id: calendarContext.idMonthSelect, "aria-label": "months", styles: styleMonthSelect })));
};
export default MonthSelect;
//# sourceMappingURL=index.js.map