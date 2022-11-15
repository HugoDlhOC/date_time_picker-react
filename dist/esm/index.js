import CalendarComponent from "./lib/components/Calendar";
import { Provider } from "react-redux";
import { store } from "./lib/app/store";
import React from "react";
export var Calendar = function () {
    return (React.createElement(Provider, { store: store },
        React.createElement(CalendarComponent, { languageChoice: "fr", yearMin: 2001, yearMax: 2120, returnFormat: "dd/MM/yyyy", classToggle: "calendar", defaultDate: new Date() })));
};
//# sourceMappingURL=index.js.map