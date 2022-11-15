"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
/**
 * This function allows you to retrieve the complete number of days in the current month, this allows you to know the end of the month (ex: December corresponds to 31)
 * @param date
 * @returns {number}
 */
var allDaysCurrentMonth = function (date) { return (0, date_fns_1.getDaysInMonth)(date) + 1; };
exports["default"] = allDaysCurrentMonth;
//# sourceMappingURL=allDaysCurrentMonth.js.map