import { getDaysInMonth } from "date-fns";

/**
 * This function allows you to retrieve the complete number of days in the current month, this allows you to know the end of the month (ex: December corresponds to 31)
 * @param date
 * @returns {number}
 */
const allDaysCurrentMonth = (date: Date) => getDaysInMonth(date) + 1;

export default allDaysCurrentMonth;
