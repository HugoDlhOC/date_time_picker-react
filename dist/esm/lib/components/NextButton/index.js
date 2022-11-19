import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addMonths } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
/**
 * This component allows to define the behavior of the next arrow. When the user clicks on it, the days of the next month will be displayed.
 * @returns JSX
 */
var NextButton = function () {
    var calendarContext = useContext(CalendarContext);
    var dateConvert = new Date(calendarContext.date);
    //next month button
    var handleNextMonth = function () {
        var saveDate = dateConvert;
        calendarContext.setDate(addMonths(saveDate, 1).toISOString());
    };
    return (React.createElement("div", null,
        React.createElement("button", { type: "button", onClick: handleNextMonth, className: "button-navigation", id: "button-next-arrow", "data-testid": "button-next-arrow", "aria-label": "Next Month" },
            React.createElement(FontAwesomeIcon, { icon: faCircleArrowRight, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
export default NextButton;
//# sourceMappingURL=index.js.map