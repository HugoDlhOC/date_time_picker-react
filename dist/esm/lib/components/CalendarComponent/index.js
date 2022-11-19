import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useEffect } from "react";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
import { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
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
    var calendarContext = useContext(CalendarContext);
    useEffect(function () {
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
    useEffect(function () {
        calendarContext.setLanguage(props.languageChoice);
        //redux
        calendarContext.setReturnFormat(props.returnFormat);
        //redux
        calendarContext.setYearMin(yearMinConvert);
        calendarContext.setYearMax(yearMaxConvert);
    }, []);
    useEffect(function () {
        try {
            if (props.defaultDate === undefined) {
                calendarContext.setReturnDate(format(new Date(), props.returnFormat));
            }
            else {
                calendarContext.setReturnDate(format(props.defaultDate, props.returnFormat));
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
    React.createElement("div", { className: "input-calendar" },
        React.createElement("label", { htmlFor: "input-calendar" }, props.labelContent),
        React.createElement("input", { type: "text", onClick: function () { return calendarContext.setIsOpen(!calendarContext.isOpen); }, 
            // @ts-ignore
            onChange: onChangeInput, value: calendarContext.returnDate, role: "textbox", id: "input-calendar", className: calendarContext.isOpen
                ? "input-calendar-open"
                : "input-calendar-close" }),
        React.createElement("div", { className: props.classToggle === undefined ? "calendar" : props.classToggle, "data-testid": "calendar" },
            React.createElement(Navigation, { isOpen: calendarContext.isOpen }),
            React.createElement(CalendarBody, null))));
};
export default CalendarComponent;
CalendarComponent.propTypes = {
    languageChoice: PropTypes.any,
    yearMin: PropTypes.number,
    yearMax: PropTypes.number,
    returnFormat: PropTypes.string
};
//# sourceMappingURL=index.js.map