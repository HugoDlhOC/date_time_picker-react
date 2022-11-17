"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_redux_1 = require("react-redux");
var calendarSlice_1 = require("../../feature/calendarSlice");
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * This component represents the Home Button, when the user will click on the Home button, he will be redirected to the current month.
 * @returns JSX
 */
var HomeButton = function () {
    //redux
    var dispatch = (0, react_redux_1.useDispatch)();
    //home button = returns to the current date
    var handleHome = function () {
        var actualDate = new Date().toISOString();
        dispatch((0, calendarSlice_1.changeDate)({ date: actualDate }));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: handleHome, className: "button-navigation", "aria-label": "Home Current Month" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHome, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
exports["default"] = HomeButton;
//# sourceMappingURL=index.js.map