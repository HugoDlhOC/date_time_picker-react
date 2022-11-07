/**
 * This function defines the set of years for the select Years. A start and end year is expected. An array of the result is returned.
 * @param startYear
 * @param endYear
 * @returns {Array}
 */
const defineYearsSelect = (startYear: number, endYear: number) => {
  //années, établissement d'une plage de 100 ans à l'utilisateur - on laisse une marge de 50 en avant et 50 après l'année actuelle
  const years = [];

  for (let i = startYear; i <= endYear; i++) {
    years.push({ label: i, value: i });
  }
  console.log(years);
  return years;
};

export default defineYearsSelect;
