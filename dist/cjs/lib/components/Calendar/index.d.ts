/// <reference types="react" />
import PropTypes from "prop-types";
interface CalendarDemo {
    languageChoice: string;
    yearMin: number;
    yearMax: number;
    returnFormat: string;
    classToggle: string;
    defaultDate: Date;
}
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
declare const CalendarComponent: {
    (props: CalendarDemo): JSX.Element;
    propTypes: {
        languageChoice: PropTypes.Requireable<any>;
        yearMin: PropTypes.Requireable<number>;
        yearMax: PropTypes.Requireable<number>;
        returnFormat: PropTypes.Requireable<string>;
    };
};
export default CalendarComponent;
