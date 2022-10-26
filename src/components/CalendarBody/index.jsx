import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import allDaysCurrentMonth from "../../services/allDaysCurrentMonth";
import allSundayCurrentMonth from "../../services/allSundayCurrentMonth";
import sortWeeksCalendar from "../../services/sortWeeksCalendar";
import DaysNamesWeek from "../DaysNamesWeek";

const CalendarBody = () => {
  //context pour le changement de mois et d'année
  const { date } = useContext(DateContext);
  console.log(date.date.getFullYear());

  const objDate = new Date(
    date.date.getFullYear(),
    date.date.getMonth(),
    date.date.getDate()
  );

  //nombre de jours dans le mois en cours
  const totalOfDaysThisMonth = allDaysCurrentMonth(objDate);

  //déterminer le nombre de dimanche dans le mois
  const allSundayCurrentMonthNumber = allSundayCurrentMonth(
    objDate,
    totalOfDaysThisMonth
  );

  //tri pour une bonne organisation des jours de la semaine
  const sortWeeks = sortWeeksCalendar(
    objDate,
    allSundayCurrentMonthNumber,
    totalOfDaysThisMonth
  );

  //mise en place de l'obtention de la date lors du clic du bouton
  const [dateDisplay, setDateDisplay] = useState("");
  //l'utilisateur peut choisir le format de la date retournée : soit "fr", soit "en"
  const handleDisplayDate = (positionMonth, dayNumber, format) => {
    switch (positionMonth) {
      case "previous":
        format === "en"
          ? setDateDisplay(
              String(date.date.getFullYear()) +
                "/" +
                String(date.date.getMonth()) +
                "/" +
                String(dayNumber)
            )
          : setDateDisplay(
              String(dayNumber) +
                "/" +
                String(date.date.getMonth()) +
                "/" +
                String(date.date.getFullYear())
            );
        break;
      case "current":
        format === "en"
          ? setDateDisplay(
              String(date.date.getFullYear()) +
                "/" +
                String(date.date.getMonth() + 1) +
                "/" +
                String(dayNumber)
            )
          : setDateDisplay(
              String(dayNumber) +
                "/" +
                String(date.date.getMonth() + 1) +
                "/" +
                String(date.date.getFullYear())
            );
        break;
      case "next":
        format === "en"
          ? setDateDisplay(
              String(date.date.getFullYear()) +
                "/" +
                String(date.date.getMonth() + 2) +
                "/" +
                String(dayNumber)
            )
          : setDateDisplay(
              String(dayNumber) +
                "/" +
                String(date.date.getMonth() + 2) +
                "/" +
                String(date.date.getFullYear())
            );
        break;
    }
  };
  console.log(sortWeeks);

  return (
    <div>
      <DaysNamesWeek />
      <div className={"first-days-cells"}>
        <div className={"row"}>
          {sortWeeks[0].values.length != 7
            ? sortWeeks[0].values.map((item) => {
                return (
                  <div className={"cell previous"}>
                    <button
                      onClick={() => handleDisplayDate("previous", item, "fr")}
                    >
                      {item}
                    </button>
                  </div>
                );
              })
            : ""}
          {sortWeeks[1].values.map((item) => {
            return (
              <div className={"cell"}>
                <button
                  onClick={() => handleDisplayDate("current", item, "fr")}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"day-cells"}>
        {sortWeeks[2].values.map((item, index) => {
          return (
            <div className={"row"}>
              {item.values.map((date) => {
                return (
                  <div className={"cell"}>
                    <button
                      onClick={() => handleDisplayDate("current", date, "fr")}
                    >
                      {date}
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={"last-days-cells"}>
        <div className={"row"}>
          {sortWeeks[3].values.map((item) => {
            return (
              <div className={"cell"}>
                <button
                  onClick={() => handleDisplayDate("current", item, "fr")}
                >
                  {item}
                </button>
              </div>
            );
          })}
          {sortWeeks[3].values.length != 0
            ? sortWeeks[4].values.map((item) => {
                return (
                  <div className={"cell after"}>
                    <button
                      onClick={() => handleDisplayDate("next", item, "fr")}
                    >
                      {item}
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className={"number-week-cells"}></div>
      <h1>
        Nous sommes le {date.date.getDate()}/{date.date.getMonth() + 1}/
        {date.date.getFullYear()}
      </h1>
      <h1>Vous avez cliqué sur la date {dateDisplay}</h1>
    </div>
  );
};
export default CalendarBody;
