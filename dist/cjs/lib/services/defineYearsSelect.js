"use strict";
exports.__esModule = true;
/**
 * This function defines the set of years for the select Years. A start and end year is expected. An array of the result is returned.
 * @param startYear
 * @param endYear
 * @returns {Array}
 */
var defineYearsSelect = function (startYear, endYear) {
    //années, établissement d'une plage de 100 ans à l'utilisateur - on laisse une marge de 50 en avant et 50 après l'année actuelle
    var years = [];
    for (var i = startYear; i <= endYear; i++) {
        years.push({ label: i, value: i });
    }
    return years;
};
exports["default"] = defineYearsSelect;
//# sourceMappingURL=defineYearsSelect.js.map