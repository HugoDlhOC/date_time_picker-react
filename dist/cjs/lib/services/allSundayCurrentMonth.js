"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
/**
 * This function retrieves the list of all the Sundays of the current month. A table of Sundays is returned.
 * @param date
 * @returns {Array}
 */
var allSundayCurrentMonth = function (date, totalOfDaysThisMonth) {
    //on détermine tous les samedis et dimanches du mois en cours
    var result = (0, date_fns_1.eachWeekendOfInterval)({
        start: new Date(date.getFullYear(), date.getMonth(), 1),
        end: new Date(date.getFullYear(), date.getMonth(), totalOfDaysThisMonth - 1)
    });
    //on ne garde que les dimanches du mois en cours
    var allSundayCurrentMonthDateComplete = result.filter(function (item) {
        return String(item).includes("Sun");
    });
    var allSundayCurrentMonthNumber = allSundayCurrentMonthDateComplete.map(function (item) { return item.getDate(); });
    return allSundayCurrentMonthNumber;
};
exports["default"] = allSundayCurrentMonth;
//# sourceMappingURL=allSundayCurrentMonth.js.map