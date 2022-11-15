/**
 * This function will take care of sorting the weeks of the current month. An object array is returned with the first week (can contain days of the previous month and days of the current month), the full weeks of the current month, and the last week (can contain days of the next month and the last days of the current month).
 * @param date
 * @param allSundayCurrentMonthNumber
 * @param totalOfDaysThisMonth
 * @returns {Array}
 */
declare const sortWeeksCalendar: (date: Date, allSundayCurrentMonthNumber: any, totalOfDaysThisMonth: number) => {
    description: string;
    values: any[];
}[];
export default sortWeeksCalendar;
