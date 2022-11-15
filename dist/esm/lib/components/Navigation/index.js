import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import React from "react";
/**
 * This component represents the whole navigation of the calendar, directional arrows to go to the month before or the month after, and the home button. The 2 selects (months and years) are also present.
 * @param isOpen
 * @returns JSX
 */
var Navigation = function (props) {
    var date = useSelector(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    var yearMin = useSelector(function (state) { return state.calendar.yearMin; });
    var yearMax = useSelector(function (state) { return state.calendar.yearMax; });
    return (React.createElement("nav", { className: props.isOpen === true
            ? "navigation-datepicker"
            : "navigation-datepicker hide" },
        dateConvert.getFullYear() === yearMin && dateConvert.getMonth() === 0 ? ("") : (React.createElement(PreviousButton, null)),
        React.createElement(HomeButton, null),
        React.createElement(MonthSelect, null),
        React.createElement(YearSelect, null),
        dateConvert.getFullYear() === yearMax &&
            dateConvert.getMonth() === 11 ? ("") : (React.createElement(NextButton, null))));
};
export default Navigation;
Navigation.propTypes = {
    isOpen: PropTypes.bool
};
//# sourceMappingURL=index.js.map