import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
import styleMonthSelect from "../../services/configStyleMonthSelect";
/**
 * This component represents the select offering the different months that the user can select.
 * @returns JSX
 */
var MonthSelect = function () {
    //redux
    var dispatch = useDispatch();
    //redux
    var date = useSelector(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    var choiceUserLanguage = useSelector(function (state) { return state.calendar.language; });
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
        dispatch(changeDate({ date: new Date(saveDate).toISOString() }));
    };
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "months" }),
        React.createElement(Select, { defaultValue: months.find(function (item) { return item.value === dateConvert.getMonth(); }), value: months.find(function (item) { return item.value === dateConvert.getMonth(); }), onChange: handleSelectChangeMonth, options: months, isSearchable: false, isClearable: false, "data-testid": "months-select", id: "months", "aria-label": "months", styles: styleMonthSelect })));
};
export default MonthSelect;
//# sourceMappingURL=index.js.map