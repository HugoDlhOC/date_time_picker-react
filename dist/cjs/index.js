"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var client_1 = tslib_1.__importDefault(require("react-dom/client"));
require("./lib/css/style.css");
var reportWebVitals_1 = tslib_1.__importDefault(require("./reportWebVitals"));
var Calendar_1 = tslib_1.__importDefault(require("./lib/components/Calendar"));
// @ts-ignore
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "date", classChange: "maclasse" }),
    react_1["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "date" }),
    react_1["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "date" }),
    react_1["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "date" }),
    react_1["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "date" }),
    react_1["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "date" })));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1["default"])();
//# sourceMappingURL=index.js.map