import { createContext, useReducer, useState } from "react";

export const DateContext = createContext();

const DateContextProvider = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContextProvider;
