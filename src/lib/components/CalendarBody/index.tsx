import allDaysCurrentMonth from "../../services/allDaysCurrentMonth";
import allSundayCurrentMonth from "../../services/allSundayCurrentMonth";
import sortWeeksCalendar from "../../services/sortWeeksCalendar";
import DaysNamesWeek from "../DaysNamesWeek";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { defineReturnDate, openCalendar } from "../../feature/calendarSlice";
import { RootState } from "../../app/store";
import React from "react";

/**
 * This component represents the body of the calendar (all selecting days).
 * @returns JSX
 */
const CalendarBody = () => {
  //redux
  const dispatch = useDispatch();

  //redux
  const isOpen = useSelector((state: RootState) => state.calendar.isOpen);

  //redux
  const date = useSelector((state: RootState) => state.calendar.date);

  //redux
  const returnFormat = useSelector(
    (state: RootState) => state.calendar.returnFormat
  );

  const objDate = new Date(date);

  //number of days in the current month
  const totalOfDaysThisMonth = allDaysCurrentMonth(objDate);

  //determine the number of Sundays in the month
  const allSundayCurrentMonthNumber = allSundayCurrentMonth(
    objDate,
    totalOfDaysThisMonth
  );

  //sorting for a good organization of the days of the week
  const sortWeeks = sortWeeksCalendar(
    objDate,
    allSundayCurrentMonthNumber,
    totalOfDaysThisMonth
  );

  const handleDisplayDate = (positionMonth: string, dayNumber: number) => {
    let clickDate = new Date(objDate.getFullYear(), objDate.getMonth(), 1);

    switch (positionMonth) {
      case "previous":
        clickDate.setMonth(clickDate.getMonth() - 1);
        break;
      case "current":
        break;
      case "next":
        clickDate.setMonth(clickDate.getMonth() + 1);
        break;
      default:
        break;
    }

    clickDate.setDate(dayNumber);

    dispatch(defineReturnDate({ returnDate: format(clickDate, returnFormat) }));

    //redux
    dispatch(openCalendar({ isOpen: false }));
  };

  return (
    <div className={isOpen === true ? "body-calendar" : "body-calendar hide"}>
      <DaysNamesWeek />
      <div className={"first-days-cells"}>
        <div className={"row"}>
          {sortWeeks[0].values.length !== 7
            ? sortWeeks[0].values.map((item, key) => {
                return (
                  <div className={"cell previous"} key={key}>
                    <button
                      aria-label="Date Element"
                      onClick={() => handleDisplayDate("previous", item)}
                      type={"button"}
                    >
                      {item}
                    </button>
                  </div>
                );
              })
            : ""}
          {sortWeeks[1].values.map((item, key) => {
            return (
              <div className={"cell"} key={key}>
                <button
                  type={"button"}
                  className={
                    objDate.getMonth() === new Date().getMonth() &&
                    objDate.getFullYear() === new Date().getFullYear() &&
                    item === new Date().getDate()
                      ? "button-today"
                      : ""
                  }
                  onClick={() => handleDisplayDate("current", item)}
                  aria-label="Date Element"
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"day-cells"}>
        {sortWeeks[2].values.map((item, key) => {
          return (
            <div className={"row"} key={key}>
              {item.values.map((dateItem: number, key: number) => {
                return (
                  <div className={"cell"} key={key}>
                    <button
                      type={"button"}
                      className={
                        objDate.getMonth() === new Date().getMonth() &&
                        objDate.getFullYear() === new Date().getFullYear() &&
                        dateItem === new Date().getDate()
                          ? "button-today"
                          : ""
                      }
                      onClick={() => handleDisplayDate("current", dateItem)}
                      aria-label="Date Element"
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
          {sortWeeks[3].values.map((item, key) => {
            return (
              <div className={"cell"} key={key}>
                <button
                  type={"button"}
                  className={
                    objDate.getMonth() === new Date().getMonth() &&
                    objDate.getFullYear() === new Date().getFullYear() &&
                    item === new Date().getDate()
                      ? "button-today"
                      : ""
                  }
                  onClick={() => handleDisplayDate("current", item)}
                  aria-label="Date Element"
                >
                  {item}
                </button>
              </div>
            );
          })}
          {sortWeeks[3].values.length !== 0
            ? sortWeeks[4].values.map((item, key) => {
                return (
                  <div className={"cell after"} key={key}>
                    <button
                      type={"button"}
                      aria-label="Date Element"
                      onClick={() => handleDisplayDate("next", item)}
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
    </div>
  );
};
export default CalendarBody;
