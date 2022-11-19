"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_1 = tslib_1.__importStar(require("react"));
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
/**
 * This component represents the Home Button, when the user will click on the Home button, he will be redirected to the current month.
 * @returns JSX
 */
var HomeButton = function () {
    var calendarContext = (0, react_1.useContext)(CalendarContext_1["default"]);
    //home button = returns to the current date
    var handleHome = function () {
        var actualDate = new Date().toISOString();
        calendarContext.setDate(actualDate);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: handleHome, className: "button-navigation", "aria-label": "Home Current Month", type: "button" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHome, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
exports["default"] = HomeButton;
//# sourceMappingURL=index.js.map