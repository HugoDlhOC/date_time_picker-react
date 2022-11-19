import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { subMonths } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
/**
 * This component allows to define the behavior of the previous arrow. When the user clicks on it, the days of the previous month will be displayed.
 * @returns JSX
 */
var PreviousButton = function () {
    var calendarContext = useContext(CalendarContext);
    var dateConvert = new Date(calendarContext.date);
    //previous month button
    var handlePreviousMonth = function () {
        var saveDate = dateConvert;
        calendarContext.setDate(subMonths(saveDate, 1).toISOString());
    };
    return (React.createElement("div", null,
        React.createElement("button", { type: "button", onClick: handlePreviousMonth, className: "button-navigation", id: "button-previous-arrow", "data-testid": "button-previous-arrow", "aria-label": "Previous Month" },
            React.createElement(FontAwesomeIcon, { icon: faCircleArrowLeft, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
export default PreviousButton;
//# sourceMappingURL=index.js.map