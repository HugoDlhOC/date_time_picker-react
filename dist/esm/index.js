import React from "react";
import ReactDOM from "react-dom/client";
import "./lib/css/style.css";
import reportWebVitals from "./reportWebVitals";
import Calendar from "./lib/components/Calendar";
// @ts-ignore
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Calendar, { yearMax: 2020, yearMin: 2000, returnFormat: "MM/dd/yyy", defaultDate: new Date(), labelContent: "Date of birth", languageChoice: "enUS" }),
    React.createElement(Calendar, { yearMax: 2030, yearMin: 2000, returnFormat: "MM/dd/yy", defaultDate: new Date(), labelContent: "Date of start", languageChoice: "ru" }),
    React.createElement(Calendar, { yearMax: 2040, yearMin: 2000, returnFormat: "dd/MM/yy", defaultDate: new Date(), labelContent: "Date of sales", languageChoice: "af" })));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//# sourceMappingURL=index.js.map