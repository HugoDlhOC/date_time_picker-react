import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { Provider, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { changeLanguage, changeReturnFormat, defineYearsInterval, openCalendar, defineReturnDate, } from "../../feature/calendarSlice";
import { format } from "date-fns";
import { useEffect } from "react";
import { store } from "../../app/store";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
var MAX_YEAR = 1000;
/**
 * This component represents the entire calendar.
 * @param languageChoice
 * @param yearMin
 * @param yearMax
 * @param returnFormat
 * @param classChange
 * @param defaultDate
 * @returns JSX
 */
var Calendar = function (props) {
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
    //LANGUAGE
    var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === props.languageChoice; });
    if (indexListOfLanguage === -1) {
        throw new Error("language not found, inspect date-fns documentation for a list of languages available");
    }
    //redux
    var dispatch = useDispatch();
    //redux
    dispatch(changeLanguage({ language: props.languageChoice }));
    //redux
    var returnDate = useSelector(function (state) { return state.calendar.returnDate; });
    //redux
    dispatch(changeReturnFormat({ returnFormat: props.returnFormat }));
    //attention : il faut bien prendre compte que le mois de janvier correspond à 0 pour ce props et 11 à décembre, sinon incrémentation d'une année...
    useEffect(function () {
        try {
            if (props.defaultDate === undefined) {
                dispatch(defineReturnDate({
                    returnDate: format(new Date(), props.returnFormat)
                }));
            }
            else {
                dispatch(defineReturnDate({
                    returnDate: format(props.defaultDate, props.returnFormat)
                }));
            }
        }
        catch (e) {
            throw new Error("The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns.");
        }
    }, []);
    var isOpen = useSelector(function (state) { return state.calendar.isOpen; });
    dispatch(defineYearsInterval({ yearMin: yearMinConvert, yearMax: yearMaxConvert }));
    var handleOpenCalendar = function () {
        dispatch(openCalendar({ isOpen: !isOpen }));
    };
    var onChangeInput = function (e) {
        dispatch(defineReturnDate({ returnDate: e.target.value }));
    };
    return (React.createElement(Provider, { store: store },
        React.createElement("div", { className: "input-calendar" },
            React.createElement("input", { type: "text", onClick: handleOpenCalendar, 
                // @ts-ignore
                onChange: onChangeInput, value: returnDate }),
            React.createElement("div", { className: props.classToggle === undefined ? "calendar" : props.classToggle },
                React.createElement(Navigation, { isOpen: isOpen }),
                React.createElement(CalendarBody, null)))));
};
export default Calendar;
Calendar.propTypes = {
    languageChoice: PropTypes.any,
    yearMin: PropTypes.number,
    yearMax: PropTypes.number,
    returnFormat: PropTypes.string
};
//# sourceMappingURL=index.js.map