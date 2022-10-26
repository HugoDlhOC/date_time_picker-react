const defineYearsSelect = (interval) => {
  const objDate = new Date();

  //date actuelle
  const currentDayYear = objDate.getFullYear();

  //années, établissement d'une plage de 100 ans à l'utilisateur - on laisse une marge de 50 en avant et 50 après l'année actuelle
  const years = [];
  //+1 pour afficher l'année actuelle :
  for (let i = currentDayYear - interval; i < currentDayYear; i++) {
    years.push({ label: i, value: i });
  }
  for (let i = currentDayYear; i <= currentDayYear + interval; i++) {
    years.push({ label: i, value: i });
  }

  return years;
};

export default defineYearsSelect;
