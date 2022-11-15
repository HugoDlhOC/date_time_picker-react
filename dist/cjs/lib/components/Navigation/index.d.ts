/// <reference types="react" />
import PropTypes from "prop-types";
interface NavigationDemo {
    isOpen: boolean;
}
/**
 * This component represents the whole navigation of the calendar, directional arrows to go to the month before or the month after, and the home button. The 2 selects (months and years) are also present.
 * @param isOpen
 * @returns JSX
 */
declare const Navigation: {
    (props: NavigationDemo): JSX.Element;
    propTypes: {
        isOpen: PropTypes.Requireable<boolean>;
    };
};
export default Navigation;
