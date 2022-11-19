import React from "react";
import { CalendarContextProvider } from "../../context/CalendarContext";
import CalendarComponent from "../CalendarComponent";

const Calendar = () => {
  return (
    <CalendarContextProvider>
      <CalendarComponent
        languageChoice={"fr"}
        yearMin={2001}
        yearMax={2130}
        returnFormat={"dd/MM/yyyy"}
        defaultDate={new Date()}
        labelContent={"date"}
      />
    </CalendarContextProvider>
  );
};

export default Calendar;
