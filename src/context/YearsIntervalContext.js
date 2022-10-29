import { createContext, useReducer, useState } from "react";

export const YearsIntervalContext = createContext();

const YearsIntervalContextProvider = (props) => {
  const [yearsInterval, setYearsInterval] = useState({
    yearMin: new Date().getFullYear() - 50,
    yearMax: new Date().getFullYear() + 50,
  });

  return (
    <YearsIntervalContext.Provider value={{ yearsInterval, setYearsInterval }}>
      {props.children}
    </YearsIntervalContext.Provider>
  );
};

export default YearsIntervalContextProvider;
