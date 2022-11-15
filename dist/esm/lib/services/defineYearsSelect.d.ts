/**
 * This function defines the set of years for the select Years. A start and end year is expected. An array of the result is returned.
 * @param startYear
 * @param endYear
 * @returns {Array}
 */
declare const defineYearsSelect: (startYear: number, endYear: number) => {
    label: number;
    value: number;
}[];
export default defineYearsSelect;
