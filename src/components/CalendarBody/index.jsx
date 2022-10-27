import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import allDaysCurrentMonth from "../../services/allDaysCurrentMonth";
import allSundayCurrentMonth from "../../services/allSundayCurrentMonth";
import sortWeeksCalendar from "../../services/sortWeeksCalendar";
import DaysNamesWeek from "../DaysNamesWeek";
import { ReturnDateContext } from "../../context/ReturnDateContext";
import { format } from "date-fns";
import { LanguageContext } from "../../context/LanguageContext";

const CalendarBody = ({ isOpen, setIsOpen }) => {
  //context pour le changement de mois et d'année
  const { date, dispatch } = useContext(DateContext);
  console.log(date.date.getFullYear());

  //context
  const { returnDate, setReturnDate } = useContext(ReturnDateContext);

  //context
  const { language } = useContext(LanguageContext);

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
  const handleDisplayDate = (positionMonth, dayNumber) => {
    let clickDate = new Date(
      date.date.getFullYear(),
      date.date.getMonth(),
      dayNumber
    );

    switch (positionMonth) {
      case "previous":
        clickDate.setMonth(clickDate.getMonth() - 1);
        break;
      case "current":
        break;
      case "next":
        clickDate.setMonth(clickDate.getMonth() + 1);
        break;
    }

    switch (language) {
      case "enUS":
        setReturnDate(format(clickDate, "MM/dd/yyyy"));
        break;

      case "fr":
        setReturnDate(format(clickDate, "dd/MM/yyyy"));
        break;

      default:
        setReturnDate(format(clickDate, "MM/dd/yyyy"));
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className={isOpen === true ? "body-calendar" : "body-calendar hide"}>
      <DaysNamesWeek />
      <div className={"first-days-cells"}>
        <div className={"row"}>
          {sortWeeks[0].values.length != 7
            ? sortWeeks[0].values.map((item) => {
                return (
                  <div className={"cell previous"}>
                    <button onClick={() => handleDisplayDate("previous", item)}>
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
                  className={
                    date.date.getMonth() === new Date().getMonth() &&
                    date.date.getFullYear() === new Date().getFullYear() &&
                    item === new Date().getDate()
                      ? "button-today"
                      : ""
                  }
                  onClick={() => handleDisplayDate("current", item)}
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
              {item.values.map((dateItem) => {
                return (
                  <div className={"cell"}>
                    <button
                      className={
                        date.date.getMonth() === new Date().getMonth() &&
                        date.date.getFullYear() === new Date().getFullYear() &&
                        dateItem === new Date().getDate()
                          ? "button-today"
                          : ""
                      }
                      onClick={() => handleDisplayDate("current", dateItem)}
                    >
                      {dateItem}
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
                  className={
                    date.date.getMonth() === new Date().getMonth() &&
                    date.date.getFullYear() === new Date().getFullYear() &&
                    item === new Date().getDate()
                      ? "button-today"
                      : ""
                  }
                  onClick={() => handleDisplayDate("current", item)}
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
                    <button onClick={() => handleDisplayDate("next", item)}>
                      {item}
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className={"number-week-cells"}></div>
    </div>
  );
};
export default CalendarBody;
