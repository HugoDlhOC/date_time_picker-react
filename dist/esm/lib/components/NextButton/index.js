import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import React from "react";
/**
 * This component allows to define the behavior of the next arrow. When the user clicks on it, the days of the next month will be displayed.
 * @returns JSX
 */
var NextButton = function () {
    //redux
    var dispatch = useDispatch();
    var date = useSelector(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    //next month button
    var handleNextMonth = function () {
        var saveDate = dateConvert;
        dispatch(changeDate({ date: addMonths(saveDate, 1).toISOString() }));
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleNextMonth, className: "button-navigation", id: "button-next-arrow", "data-testid": "button-next-arrow", "aria-label": "Next Month" },
            React.createElement(FontAwesomeIcon, { icon: faCircleArrowRight, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
export default NextButton;
//# sourceMappingURL=index.js.map