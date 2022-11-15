"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var date_fns_1 = require("date-fns");
var react_redux_1 = require("react-redux");
var calendarSlice_1 = require("../../feature/calendarSlice");
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * This component allows to define the behavior of the previous arrow. When the user clicks on it, the days of the previous month will be displayed.
 * @returns JSX
 */
var PreviousButton = function () {
    //redux
    var dispatch = (0, react_redux_1.useDispatch)();
    var date = (0, react_redux_1.useSelector)(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    //previous month button
    var handlePreviousMonth = function () {
        var saveDate = dateConvert;
        dispatch((0, calendarSlice_1.changeDate)({ date: (0, date_fns_1.subMonths)(saveDate, 1).toISOString() }));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: handlePreviousMonth, className: "button-navigation", id: "button-previous-arrow", "data-testid": "button-previous-arrow", "aria-label": "Previous Month" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowLeft, className: "button-navigation--icon", size: "xl", color: "white" }))));
};
exports["default"] = PreviousButton;
//# sourceMappingURL=index.js.map