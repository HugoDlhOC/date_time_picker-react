import {
  endOfMonth,
  getDaysInMonth,
  getWeek,
  nextSaturday,
  nextSunday,
  startOfMonth,
} from "date-fns";

const FakeComponent = () => {
  //récupération de la date actuelle
  const date = new Date();
  const currentDayName = date.getDay();
  const currentDayNumber = date.getDate();
  const currentDayMonth = date.getMonth() + 1; //(0 = janvier)
  const currentDayYear = date.getFullYear();

  //début du mois
  const firstDayOfCurrentMonth = startOfMonth(date);

  //fin du mois
  const lastDayOfCurrentMonth = endOfMonth(date);

  //on peut établir un tableau avec tous les jours du mois en cours avec le numéro du jour de début et de fin

  //récupération du prochain dimanche, car les semaines commencent par sunday dans le calendrier
  const nextSundayOfTheWeek = nextSunday(date);

  //récupération du prochain samedi, car les semaines finissent par saturday dans le calendrier
  const nextSaturdayOfTheWeek = nextSaturday(date);

  //récupération du numéro de la semaine
  const numberOfCurrentWeek = getWeek(date);

  //nombre de jours dans le mois en cours
  const totalOfDaysThisMonth = getDaysInMonth(date);

  return (
    <div>
      <p>
        Today, we are the{" "}
        <strong>
          {currentDayMonth}/{currentDayNumber}/{currentDayYear}
        </strong>
        , and we are the day <strong>{currentDayName}</strong> of the week (1 =
        monday, 2 = sunday)
      </p>
      <p>
        The first day of this month is
        <strong>{firstDayOfCurrentMonth.toString()}</strong>
      </p>
      <p>
        The last day of this month is
        <strong>{lastDayOfCurrentMonth.toString()}</strong>
      </p>
      <p>
        The next sunday is
        <strong>{nextSundayOfTheWeek.toString()}</strong>
      </p>
      <p>
        The next saturday is
        <strong>{nextSaturdayOfTheWeek.toString()}</strong>
      </p>
      <p>
        We are the week number
        <strong>{numberOfCurrentWeek}</strong>
      </p>
      <p>
        We have
        <strong>{totalOfDaysThisMonth}</strong> days in this month
      </p>
    </div>
  );
};

export default FakeComponent;
