"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var Navigation_1 = tslib_1.__importDefault(require("../Navigation"));
var CalendarBody_1 = tslib_1.__importDefault(require("../CalendarBody"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var date_fns_1 = require("date-fns");
var react_1 = require("react");
var listOfLanguage = tslib_1.__importStar(require("date-fns/esm/locale"));
var react_2 = tslib_1.__importDefault(require("react"));
var react_3 = require("react");
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
var MAX_YEAR = 1000;
/**
 * This component represents the entire calendar.
 * @param languageChoice
 * @param yearMin
 * @param yearMax
 * @param returnFormat
 * @param classChange
 * @param defaultDate
 * @param labelContent
 * @returns JSX
 */
var CalendarComponent = function (props) {
    var calendarContext = (0, react_3.useContext)(CalendarContext_1["default"]);
    (0, react_1.useEffect)(function () {
        var handleOpenCalendar = function (e) {
            console.log(e);
            var calendarsOpened = document.querySelectorAll(".navigation-datepicker.display");
            console.log(calendarsOpened.length);
            //@ts-ignore
            if (e.path[0].tagName !== "INPUT" || calendarsOpened.length > 1) {
                calendarContext.setIsOpen(false);
            }
        };
        // @ts-ignore
        document.body.addEventListener("click", handleOpenCalendar);
        // @ts-ignore
        return function () { return document.body.removeEventListener("click", handleOpenCalendar); };
    }, []);
    //CONTROL
    //YEARS
    var yearMinConvert = parseInt(String(props.yearMin));
    var yearMaxConvert = parseInt(String(props.yearMax));
    var date = new Date();
    if (yearMinConvert < date.getFullYear() - MAX_YEAR) {
        throw new Error("The given value is too low, it cannot be lower than the current year - 1000");
    }
    if (yearMaxConvert > date.getFullYear() + MAX_YEAR) {
        throw new Error("The given value is too high, it cannot be higher than the current year + 1000");
    }
    if (props.yearMin > props.yearMax) {
        throw new Error("The yearMin value can't be bigger than yearMax value");
    }
    //LANGUAGE
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === props.languageChoice; });
    if (indexListOfLanguage === -1) {
        throw new Error("language not found, inspect date-fns documentation for a list of languages available");
    }
    //redux
    (0, react_1.useEffect)(function () {
        calendarContext.setLanguage(props.languageChoice);
        //redux
        calendarContext.setReturnFormat(props.returnFormat);
        //redux
        calendarContext.setYearMin(yearMinConvert);
        calendarContext.setYearMax(yearMaxConvert);
    }, []);
    (0, react_1.useEffect)(function () {
        try {
            if (props.defaultDate === undefined) {
                calendarContext.setReturnDate((0, date_fns_1.format)(new Date(), props.returnFormat));
            }
            else {
                calendarContext.setReturnDate((0, date_fns_1.format)(props.defaultDate, props.returnFormat));
            }
        }
        catch (e) {
            throw new Error("The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns.");
        }
    }, [props.defaultDate]);
    var onChangeInput = function (e) {
        calendarContext.setReturnDate(e.target.value);
    };
    return (
    // @ts-ignore
    react_2["default"].createElement("div", { className: "input-calendar" },
        react_2["default"].createElement("label", { htmlFor: "input-calendar" }, props.labelContent),
        react_2["default"].createElement("input", { type: "text", onClick: function () { return calendarContext.setIsOpen(!calendarContext.isOpen); }, 
            // @ts-ignore
            onChange: onChangeInput, value: calendarContext.returnDate, role: "textbox", id: "input-calendar", className: calendarContext.isOpen
                ? "input-calendar-open"
                : "input-calendar-close" }),
        react_2["default"].createElement("div", { className: props.classToggle === undefined ? "calendar" : props.classToggle, "data-testid": "calendar" },
            react_2["default"].createElement(Navigation_1["default"], { isOpen: calendarContext.isOpen }),
            react_2["default"].createElement(CalendarBody_1["default"], null))));
};
exports["default"] = CalendarComponent;
CalendarComponent.propTypes = {
    languageChoice: prop_types_1["default"].any,
    yearMin: prop_types_1["default"].number,
    yearMax: prop_types_1["default"].number,
    returnFormat: prop_types_1["default"].string
};
//# sourceMappingURL=index.js.map