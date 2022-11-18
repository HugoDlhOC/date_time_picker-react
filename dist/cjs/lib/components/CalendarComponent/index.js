"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var Navigation_1 = tslib_1.__importDefault(require("../Navigation"));
var CalendarBody_1 = tslib_1.__importDefault(require("../CalendarBody"));
var react_redux_1 = require("react-redux");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var calendarSlice_1 = require("../../feature/calendarSlice");
var date_fns_1 = require("date-fns");
var react_1 = require("react");
var listOfLanguage = tslib_1.__importStar(require("date-fns/esm/locale"));
var react_2 = tslib_1.__importDefault(require("react"));
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
    var dispatch = (0, react_redux_1.useDispatch)();
    //redux
    (0, react_1.useEffect)(function () {
        dispatch((0, calendarSlice_1.changeLanguage)({ language: props.languageChoice }));
        //redux
        dispatch((0, calendarSlice_1.changeReturnFormat)({ returnFormat: props.returnFormat }));
        //redux
        dispatch((0, calendarSlice_1.defineYearsInterval)({ yearMin: yearMinConvert, yearMax: yearMaxConvert }));
    }, []);
    //redux
    var returnDate = (0, react_redux_1.useSelector)(function (state) { return state.calendar.returnDate; });
    //attention : il faut bien prendre compte que le mois de janvier correspond à 0 pour ce props et 11 à décembre, sinon incrémentation d'une année...
    (0, react_1.useEffect)(function () {
        try {
            if (props.defaultDate === undefined) {
                dispatch((0, calendarSlice_1.defineReturnDate)({
                    returnDate: (0, date_fns_1.format)(new Date(), props.returnFormat)
                }));
            }
            else {
                dispatch((0, calendarSlice_1.defineReturnDate)({
                    returnDate: (0, date_fns_1.format)(props.defaultDate, props.returnFormat)
                }));
            }
        }
        catch (e) {
            throw new Error("The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns.");
        }
    }, [props.defaultDate]);
    var isOpen = (0, react_redux_1.useSelector)(function (state) { return state.calendar.isOpen; });
    var handleOpenCalendar = function () {
        dispatch((0, calendarSlice_1.openCalendar)({ isOpen: !isOpen }));
    };
    var onChangeInput = function (e) {
        dispatch((0, calendarSlice_1.defineReturnDate)({ returnDate: e.target.value }));
    };
    return (react_2["default"].createElement("div", { className: "input-calendar" },
        react_2["default"].createElement("label", { htmlFor: "input-calendar" }, props.labelContent),
        react_2["default"].createElement("input", { type: "text", onClick: handleOpenCalendar, 
            // @ts-ignore
            onChange: onChangeInput, value: returnDate, role: "textbox", id: "input-calendar" }),
        react_2["default"].createElement("div", { className: props.classToggle === undefined ? "calendar" : props.classToggle, "data-testid": "calendar" },
            react_2["default"].createElement(Navigation_1["default"], { isOpen: isOpen }),
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