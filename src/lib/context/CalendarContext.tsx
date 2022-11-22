//@ts-ignore
import React, { createContext, useState } from "react";

export const CalendarContext = createContext(null);

interface CalendarContextProviderDemo {
  children: any;
}

export const CalendarContextProvider = (props: CalendarContextProviderDemo) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date().toISOString());
  const [language, setLanguage] = useState("enUS");
  const [returnDate, setReturnDate] = useState("");
  const [yearMin, setYearMin] = useState(new Date().getFullYear() - 50);
  const [yearMax, setYearMax] = useState(new Date().getFullYear() + 50);
  const [returnFormat, setReturnFormat] = useState("MM/dd/yyyy");

  const value = {
    isOpen,
    setIsOpen,
    date,
    setDate,
    language,
    setLanguage,
    returnDate,
    setReturnDate,
    yearMin,
    setYearMin,
    yearMax,
    setYearMax,
    returnFormat,
    setReturnFormat,
  };

  return (
    <CalendarContext.Provider value={value}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
