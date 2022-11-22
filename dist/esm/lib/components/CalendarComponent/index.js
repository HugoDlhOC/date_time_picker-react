import Navigation from "../Navigation";
import CalendarBody from "../CalendarBody";
import { format } from "date-fns";
import { useEffect } from "react";
import * as listOfLanguage from "date-fns/esm/locale";
import React from "react";
import { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
import defineYearsSelect from "../../services/defineYearsSelect";
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
 * @param nameInput
 * @returns JSX
 */
var CalendarComponent = function (props) {
    var calendarContext = useContext(CalendarContext);
    //control clicks if multiples calendar are present
    useEffect(function () {
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
    var controlPresentCurrentYear = defineYearsSelect(props.yearMin, props.yearMax);
    var valueControl = controlPresentCurrentYear.filter(function (item) { return item.value === new Date().getFullYear(); });
    if (valueControl.length === 0)
        throw new Error("In your interval of yearMin and yearMax, the current year is not present");
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
    React.createElement("div", { className: props.classChange === undefined
            ? "input-calendar"
            : "input-calendar ".concat(props.classChange) },
        React.createElement("label", { htmlFor: "input-calendar" }, props.labelContent),
        React.createElement("input", { type: "text", onClick: function () { return calendarContext.setIsOpen(!calendarContext.isOpen); }, 
            // @ts-ignore
            onChange: onChangeInput, value: calendarContext.returnDate, role: "textbox", id: "input-calendar", "data-testid": "input-calendar", name: props.nameInput, className: calendarContext.isOpen
                ? "input-calendar-open"
                : "input-calendar-close" }),
        React.createElement("div", { className: "calendar", "data-testid": "calendar" },
            React.createElement(Navigation, { isOpen: calendarContext.isOpen }),
            React.createElement(CalendarBody, null))));
};
export default CalendarComponent;
//# sourceMappingURL=index.js.map