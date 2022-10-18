import {
  getDaysInMonth,
  getWeek,
  eachWeekendOfInterval,
  previousDay,
} from "date-fns";

const CalendarBody = () => {
  const date = new Date();
  //nombre de jours dans le mois en cours
  const totalOfDaysThisMonth = getDaysInMonth(date) + 1;

  //numéro de la semaine actuel
  const numberOfCurrentWeek = getWeek(date);

  //déterminer le nombre de dimanche dans le mois.
  //on détermine tous les samedis et dimanches du mois en cours
  const result = eachWeekendOfInterval({
    start: new Date(date.getFullYear(), date.getMonth(), 1),
    end: new Date(date.getFullYear(), date.getMonth(), totalOfDaysThisMonth),
  });

  //on ne garde que les dimanches du mois en cours
  const allSundayCurrentMonthDateComplete = result.filter((item) =>
    String(item).includes("Sun")
  );
  console.log(allSundayCurrentMonthDateComplete);

  const allSundayCurrentMonthNumber = allSundayCurrentMonthDateComplete.map(
    (item) => item.getDate()
  );
  console.log(allSundayCurrentMonthNumber);

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

  console.log("Semaines triées : ");
  console.log(sortWeeks);
  console.log("Semaines non triées : " + unsortedWeeksEndMonth);

  //on a maintenant toutes les semaines complètes du mois en cours du dimanche au samedi
  //il faut maintenant déterminer les semaines incomplètes (à la fin du mois seulement ici - logiquement il ne peut y avoir qu'une semaine incomplète, s'il y en a)
  //on ajoute les valeurs dans un tableau de la dernière semaine à trier
  const lastWeekCurrentMonth = [];
  for (let i = unsortedWeeksEndMonth[0]; i < totalOfDaysThisMonth; i++) {
    lastWeekCurrentMonth.push(i);
  }
  console.log("Dernière semaine du mois actuel non complète");
  console.log(lastWeekCurrentMonth);

  //on calcule combien de jours du mois suivant peuvent être ajoutés, sachant qu'une semaine occupe 7 jours
  const numberOfDaysLeftToAddNextMonth = 7 - lastWeekCurrentMonth.length;

  console.log(
    "On peut encore ajouter " +
      numberOfDaysLeftToAddNextMonth +
      " jours du mois suivant"
  );

  //on construit le tableau des jours du mois suivant à afficher
  const allDaysDisplayNextMonth = [];

  for (let i = 1; i <= numberOfDaysLeftToAddNextMonth; i++) {
    allDaysDisplayNextMonth.push(i);
  }

  //il nous reste la semaine incomplète du début (s'il y en a une.)
  //il faut donc écrire toutes les valeurs que l'on obtient avant le premier dimanche
  console.log(allSundayCurrentMonthNumber[0]);

  const firstWeekCurrentMonth = [];
  for (let i = 1; i < allSundayCurrentMonthNumber[0]; i++) {
    firstWeekCurrentMonth.push(i);
  }

  console.log(
    "Ce sont les premiers jours du mois qui ne font pas partis d'une semaine complète : "
  );
  console.log(firstWeekCurrentMonth);

  //on calcule combien de jours du mois précédant peuvent être ajoutés, sachant qu'une semaine occupe 7 jours
  const numberOfDaysLeftToAddPreviousMonth = 7 - firstWeekCurrentMonth.length;
  console.log(
    "On peut encore ajouter " +
      numberOfDaysLeftToAddPreviousMonth +
      " jours du mois précédant"
  );

  //on doit récupérer les valeurs des jours du mois précédant
  //on récupère le dernier jour du mois précédant, cependant dans cette fonction, le jour de la semaine est attendu en paramètres
  //on détermine le jour de la semaine qui précède le premier jour du mois en cours
  const lastDayPreviousMonthNumberWeek = 6 - firstWeekCurrentMonth; //6, car la fonction previousDay() attend un jour en chiffre et le premier jour de la semaine (dimanche) commence à 0, samedi quant à lui vaut 6
  const lastDayPreviousMonth = previousDay(
    new Date(date.getFullYear(), date.getMonth(), 1),
    lastDayPreviousMonthNumberWeek
  ).getDate();
  console.log(lastDayPreviousMonth);

  //on doit maintenant sauvegarder toutes les valeurs du mois précédant que l'on peut afficher
  const allDaysDisplayPreviousMonth = [];
  for (let i = 0; i < numberOfDaysLeftToAddPreviousMonth; i++) {
    allDaysDisplayPreviousMonth.push(lastDayPreviousMonth - i);
  }

  const allDaysDisplayPreviousMonthReverse =
    allDaysDisplayPreviousMonth.reverse();

  console.log(
    "On peut donc ajouter ces valeurs-ci (jours du mois précédents):"
  );
  console.log(allDaysDisplayPreviousMonthReverse);

  console.log(sortWeeks.length);

  return (
    <div>
      <div className={"week-cells"}>
        <div className={"cell name-day-week"}>Sun</div>
        <div className={"cell name-day-week"}>Mon</div>
        <div className={"cell name-day-week"}>Tue</div>
        <div className={"cell name-day-week"}>Wed</div>
        <div className={"cell name-day-week"}>Thu</div>
        <div className={"cell name-day-week"}>Fri</div>
        <div className={"cell name-day-week"}>Sat</div>
      </div>
      <div className={"first-days-cells"}>
        w
        <div className={"row"}>
          {allDaysDisplayPreviousMonthReverse.map((item) => {
            return (
              <div className={"cell previous"}>
                <button>{item}</button>
              </div>
            );
          })}
          {firstWeekCurrentMonth.map((item) => {
            return (
              <div className={"cell"}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"day-cells"}>
        {sortWeeks.map((item, index) => {
          return (
            <div className={"row"}>
              {item.values.map((date) => {
                return (
                  <div className={"cell"}>
                    <button>{date}</button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={"last-days-cells"}>
        <div className={"row"}>
          {lastWeekCurrentMonth.map((item) => {
            return (
              <div className={"cell"}>
                <button>{item}</button>
              </div>
            );
          })}
          {allDaysDisplayNextMonth.map((item) => {
            return (
              <div className={"cell after"}>
                <button>{item}</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"number-week-cells"}></div>
    </div>
  );
};
export default CalendarBody;
