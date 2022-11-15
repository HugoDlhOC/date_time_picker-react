import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { subMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import React from "react";
/**
 * This component allows to define the behavior of the previous arrow. When the user clicks on it, the days of the previous month will be displayed.
 * @returns JSX
 */
var PreviousButton = function () {
    //redux
    var dispatch = useDispatch();
    var date = useSelector(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    //previous month button
    var handlePreviousMonth = function () {
        var saveDate = dateConvert;
        dispatch(changeDate({ date: subMonths(saveDate, 1).toISOString() }));
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handlePreviousMonth, className: "button-navigation", id: "button-previous-arrow" },
            React.createElement(FontAwesomeIcon, { icon: faCircleArrowLeft, className: "button-navigation--icon", size: "xl", color: "white" }))));
};
export default PreviousButton;
//# sourceMappingURL=index.js.map