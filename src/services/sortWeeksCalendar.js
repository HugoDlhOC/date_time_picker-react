import { previousDay } from "date-fns";

const sortWeeksCalendar = (
  date,
  allSundayCurrentMonthNumber,
  totalOfDaysThisMonth
) => {
  //tri pour bonne organisation des jours de la semaine
  let sortWeeks = [];
  let unsortedWeeksEndMonth = [];

  allSundayCurrentMonthNumber.forEach((item, index) => {
    let values = [];
    if (item < totalOfDaysThisMonth - 6) {
      for (let j = item; j < item + 7; j++) {
        values.push(j);
      }
      sortWeeks.push({ week: index, values });
    } else {
      unsortedWeeksEndMonth.push(item);
    }
  });

  //on a maintenant toutes les semaines complètes du mois en cours du dimanche au samedi
  //il faut maintenant déterminer les semaines incomplètes (à la fin du mois seulement ici - logiquement il ne peut y avoir qu'une semaine incomplète, s'il y en a)
  //on ajoute les valeurs dans un tableau de la dernière semaine à trier
  const lastWeekCurrentMonth = [];
  for (let i = unsortedWeeksEndMonth[0]; i < totalOfDaysThisMonth; i++) {
    lastWeekCurrentMonth.push(i);
  }

  //on calcule combien de jours du mois suivant peuvent être ajoutés, sachant qu'une semaine occupe 7 jours
  const numberOfDaysLeftToAddNextMonth = 7 - lastWeekCurrentMonth.length;

  //on construit le tableau des jours du mois suivant à afficher
  const allDaysDisplayNextMonth = [];

  for (let i = 1; i <= numberOfDaysLeftToAddNextMonth; i++) {
    allDaysDisplayNextMonth.push(i);
  }

  //il nous reste la semaine incomplète du début (s'il y en a une.)
  //il faut donc écrire toutes les valeurs que l'on obtient avant le premier dimanche
  const firstWeekCurrentMonth = [];
  for (let i = 1; i < allSundayCurrentMonthNumber[0]; i++) {
    firstWeekCurrentMonth.push(i);
  }

  //on calcule combien de jours du mois précédant peuvent être ajoutés, sachant qu'une semaine occupe 7 jours
  const numberOfDaysLeftToAddPreviousMonth = 7 - firstWeekCurrentMonth.length;

  //on doit récupérer les valeurs des jours du mois précédant
  //on récupère le dernier jour du mois précédant, cependant dans cette fonction, le jour de la semaine est attendu en paramètres
  //on détermine le jour de la semaine qui précède le premier jour du mois en cours
  const lastDayPreviousMonthNumberWeek = 6 - firstWeekCurrentMonth.length; //6, car la fonction previousDay() attend un jour en chiffre et le premier jour de la semaine (dimanche) commence à 0, samedi quant à lui vaut 6
  const lastDayPreviousMonth = previousDay(
    new Date(date.getFullYear(), date.getMonth(), 1),
    lastDayPreviousMonthNumberWeek
  ).getDate();

  //on doit maintenant sauvegarder toutes les valeurs du mois précédant que l'on peut afficher
  const allDaysDisplayPreviousMonth = [];
  for (let i = 0; i < numberOfDaysLeftToAddPreviousMonth; i++) {
    allDaysDisplayPreviousMonth.push(lastDayPreviousMonth - i);
  }

  const allDaysDisplayPreviousMonthReverse =
    allDaysDisplayPreviousMonth.reverse();

  const result = [
    {
      description: "days month before",
      values: allDaysDisplayPreviousMonthReverse,
    },
    {
      description: "first week current month not sorted",
      values: firstWeekCurrentMonth,
    },
    { description: "days current month sorted weeks", values: sortWeeks },
    {
      description: "last week current month not sorted",
      values: lastWeekCurrentMonth,
    },
    { description: "days month next", values: allDaysDisplayNextMonth },
  ];

  return result;
};

export default sortWeeksCalendar;
