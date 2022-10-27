import { createContext, useReducer, useState } from "react";
import { format } from "date-fns";

export const ReturnDateContext = createContext();

const ReturnDateContextProvider = (props) => {
  const [returnDate, setReturnDate] = useState(
    format(new Date(), "MM/dd/yyyy")
  );

  return (
    <ReturnDateContext.Provider value={{ returnDate, setReturnDate }}>
      {props.children}
    </ReturnDateContext.Provider>
  );
};

export default ReturnDateContextProvider;
