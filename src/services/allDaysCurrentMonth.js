import { getDaysInMonth } from "date-fns";

const allDaysCurrentMonth = (date) => getDaysInMonth(date) + 1;

export default allDaysCurrentMonth;
