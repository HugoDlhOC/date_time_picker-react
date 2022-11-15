import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import React from "react";
/**
 * This component represents the Home Button, when the user will click on the Home button, he will be redirected to the current month.
 * @returns JSX
 */
var HomeButton = function () {
    //redux
    var dispatch = useDispatch();
    //home button = returns to the current date
    var handleHome = function () {
        var actualDate = new Date().toISOString();
        dispatch(changeDate({ date: actualDate }));
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleHome, className: "button-navigation", "aria-label": "Home Current Month" },
            React.createElement(FontAwesomeIcon, { icon: faHome, className: "button-navigation--icon", size: "xl", color: "white" }))));
};
export default HomeButton;
//# sourceMappingURL=index.js.map