import { createContext, useReducer, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState("enUS");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
