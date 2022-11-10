import { eachWeekendOfInterval } from "date-fns";

/**
 * This function retrieves the list of all the Sundays of the current month. A table of Sundays is returned.
 * @param date
 * @returns {Array}
 */
const allSundayCurrentMonth = (date: Date, totalOfDaysThisMonth: number) => {
  //on détermine tous les samedis et dimanches du mois en cours
  const result = eachWeekendOfInterval({
    start: new Date(date.getFullYear(), date.getMonth(), 1),
    end: new Date(
      date.getFullYear(),
      date.getMonth(),
      totalOfDaysThisMonth - 1
    ),
  });

  //on ne garde que les dimanches du mois en cours
  const allSundayCurrentMonthDateComplete = result.filter((item) =>
    String(item).includes("Sun")
  );

  const allSundayCurrentMonthNumber = allSundayCurrentMonthDateComplete.map(
    (item) => item.getDate()
  );
  return allSundayCurrentMonthNumber;
};

export default allSundayCurrentMonth;
