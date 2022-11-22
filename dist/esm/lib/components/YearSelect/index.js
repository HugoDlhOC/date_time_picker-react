import Select from "react-select";
import defineYearsSelect from "../../services/defineYearsSelect";
import React, { useContext } from "react";
import configStyleYearSelect from "../../services/configStyleYearSelect";
import CalendarContext from "../../context/CalendarContext";
/**
 * An interval has been defined by the developer per props.
 * @returns JSX
 */
var YearSelect = function () {
    var calendarContext = useContext(CalendarContext);
    var dateConvert = new Date(calendarContext.date);
    var years = defineYearsSelect(calendarContext.yearMin, calendarContext.yearMax);
    //change of year
    var handleSelectChangeYear = function (option) {
        var saveDate = dateConvert;
        saveDate.setFullYear(option.value);
        calendarContext.setDate(new Date(saveDate).toISOString());
        calendarContext.setYearMin(years[0].value);
        calendarContext.setYearMax(years[years.length - 1].value);
    };
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "years" }),
        React.createElement(Select, { defaultValue: years.find(function (item) { return item.value === 2022; }), 
            //@ts-ignore
            onChange: handleSelectChangeYear, value: years.find(function (item) { return item.value === dateConvert.getFullYear(); }), options: years, isSearchable: false, isClearable: false, "data-testid": "years-select", id: calendarContext.idYearSelect, "aria-label": "years", styles: configStyleYearSelect })));
};
export default YearSelect;
//# sourceMappingURL=index.js.map