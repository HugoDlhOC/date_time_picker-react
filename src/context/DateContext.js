import { createContext, useReducer } from "react";
import { dateDataReducer } from "./dateDataReducer";

export const DateContext = createContext();
const initialState = {
  date: new Date(),
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
