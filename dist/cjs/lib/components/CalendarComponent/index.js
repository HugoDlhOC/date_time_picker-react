"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var Navigation_1 = tslib_1.__importDefault(require("../Navigation"));
var CalendarBody_1 = tslib_1.__importDefault(require("../CalendarBody"));
var date_fns_1 = require("date-fns");
var react_1 = require("react");
var listOfLanguage = tslib_1.__importStar(require("date-fns/esm/locale"));
var react_2 = tslib_1.__importDefault(require("react"));
var react_3 = require("react");
var CalendarContext_1 = tslib_1.__importDefault(require("../../context/CalendarContext"));
var defineYearsSelect_1 = tslib_1.__importDefault(require("../../services/defineYearsSelect"));
var formik_1 = require("formik");
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
 * @param nameField
 * @returns JSX
 */
var CalendarComponent = function (props) {
    var field = (0, formik_1.useField)(props.nameField)[0];
    var calendarContext = (0, react_3.useContext)(CalendarContext_1["default"]);
    //control clicks if multiples calendar are present
    (0, react_1.useEffect)(function () {
        var handleOpenCalendar = function (e) {
            var calendarsOpened = document.querySelectorAll(".navigation-datepicker.display");
            var controlClassPresent = [];
            //@ts-ignore
            if (e.path !== undefined) {
                //@ts-ignore
                e.path.forEach(function (item) {
                    if (item.classList !== undefined) {
                        item.classList.forEach(function (itemClass) {
                            if (itemClass.includes("input-calendar")) {
                                controlClassPresent.push(true);
                            }
                        });
                    }
                });
                //@ts-ignore
                if (calendarsOpened.length > 1 ||
                    controlClassPresent.find(function (item) { return item === true; }) === undefined) {
                    calendarContext.setIsOpen(false);
                }
            }
            else {
                calendarContext.setIsOpen(true);
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
    var controlPresentCurrentYear = (0, defineYearsSelect_1["default"])(props.yearMin, props.yearMax);
    var valueControl = controlPresentCurrentYear.filter(function (item) { return item.value === new Date().getFullYear(); });
    if (valueControl.length === 0)
        throw new Error("In your interval of yearMin and yearMax, the current year is not present");
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
    react_2["default"].createElement("div", { className: props.classChange === undefined
            ? "input-calendar"
            : "input-calendar ".concat(props.classChange) },
        react_2["default"].createElement("label", { htmlFor: "input-calendar" }, props.labelContent),
        react_2["default"].createElement("input", tslib_1.__assign({}, field, { type: "text", onClick: function () { return calendarContext.setIsOpen(!calendarContext.isOpen); }, 
            // @ts-ignore
            onChange: onChangeInput, value: calendarContext.returnDate, role: "textbox", id: "input-calendar", "data-testid": "input-calendar", className: calendarContext.isOpen
                ? "input-calendar-open"
                : "input-calendar-close" })),
        react_2["default"].createElement("div", { className: "calendar", "data-testid": "calendar" },
            react_2["default"].createElement(Navigation_1["default"], { isOpen: calendarContext.isOpen }),
            react_2["default"].createElement(CalendarBody_1["default"], null))));
};
exports["default"] = CalendarComponent;
//# sourceMappingURL=index.js.map