import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
/**
 * This component represents the Home Button, when the user will click on the Home button, he will be redirected to the current month.
 * @returns JSX
 */
var HomeButton = function () {
    var calendarContext = useContext(CalendarContext);
    //home button = returns to the current date
    var handleHome = function () {
        var actualDate = new Date().toISOString();
        calendarContext.setDate(actualDate);
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleHome, className: "button-navigation", "aria-label": "Home Current Month", type: "button", "data-testid": "button-home-navigation" },
            React.createElement(FontAwesomeIcon, { icon: faHome, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
export default HomeButton;
//# sourceMappingURL=index.js.map