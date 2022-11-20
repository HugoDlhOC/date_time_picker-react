import React from "react";
import ReactDOM from "react-dom/client";
import "./lib/css/style.css";
import reportWebVitals from "./reportWebVitals";
import Calendar from "./lib/components/Calendar";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calendar
      languageChoice={"fr"}
      yearMin={2001}
      yearMax={2030}
      returnFormat={"dd/MM/yyyy"}
      defaultDate={new Date()}
      labelContent={"date"}
      classChange={"maclasse"}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
