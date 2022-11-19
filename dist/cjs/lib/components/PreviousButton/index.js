"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var date_fns_1 = require("date-fns");
var react_1 = tslib_1.__importStar(require("react"));
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
/**
 * This component allows to define the behavior of the previous arrow. When the user clicks on it, the days of the previous month will be displayed.
 * @returns JSX
 */
var PreviousButton = function () {
    var calendarContext = (0, react_1.useContext)(CalendarContext_1["default"]);
    var dateConvert = new Date(calendarContext.date);
    //previous month button
    var handlePreviousMonth = function () {
        var saveDate = dateConvert;
        calendarContext.setDate((0, date_fns_1.subMonths)(saveDate, 1).toISOString());
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { type: "button", onClick: handlePreviousMonth, className: "button-navigation", id: "button-previous-arrow", "data-testid": "button-previous-arrow", "aria-label": "Previous Month" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowLeft, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
exports["default"] = PreviousButton;
//# sourceMappingURL=index.js.map