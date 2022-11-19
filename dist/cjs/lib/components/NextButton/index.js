"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var date_fns_1 = require("date-fns");
var react_1 = tslib_1.__importStar(require("react"));
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
/**
 * This component allows to define the behavior of the next arrow. When the user clicks on it, the days of the next month will be displayed.
 * @returns JSX
 */
var NextButton = function () {
    var calendarContext = (0, react_1.useContext)(CalendarContext_1["default"]);
    var dateConvert = new Date(calendarContext.date);
    //next month button
    var handleNextMonth = function () {
        var saveDate = dateConvert;
        calendarContext.setDate((0, date_fns_1.addMonths)(saveDate, 1).toISOString());
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { type: "button", onClick: handleNextMonth, className: "button-navigation", id: "button-next-arrow", "data-testid": "button-next-arrow", "aria-label": "Next Month" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowRight, className: "button-navigation--icon", size: "lg", color: "white" }))));
};
exports["default"] = NextButton;
//# sourceMappingURL=index.js.map