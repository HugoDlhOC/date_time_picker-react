const defineYearsSelect = (startYear, endYear) => {
  //années, établissement d'une plage de 100 ans à l'utilisateur - on laisse une marge de 50 en avant et 50 après l'année actuelle
  const years = [];

  for (let i = startYear; i <= endYear; i++) {
    years.push({ label: i, value: i });
  }
  console.log(years);
  return years;
};

export default defineYearsSelect;
