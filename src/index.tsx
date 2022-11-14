import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Calendar from "./components/Calendar";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calendar
        yearMin={2001}
        yearMax={2030}
        returnFormat={"MM/dd/yyyy"}
        languageChoice={"enUS"}
        defaultDate={new Date(2022, 0, 20)}
        classToggle={"calendar"}
      />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
