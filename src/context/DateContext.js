import { createContext, useReducer } from "react";
import { dateDataReducer } from "./dateDataReducer";

export const DateContext = createContext();
const objDate = new Date();
const initialState = {
  day: objDate.getDate(),
  month: objDate.getMonth(),
  year: objDate.getFullYear(),
};

const DateContextProvider = (props) => {
  const [date, dispatch] = useReducer(dateDataReducer, initialState);

  return (
    <DateContext.Provider value={{ date, dispatch }}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContextProvider;
