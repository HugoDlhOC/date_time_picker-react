import CalendarComponent from "./lib/components/CalendarComponent";
import { Provider } from "react-redux";
import { store } from "./lib/app/store";
import React from "react";
export var Calendar = function () {
    return (React.createElement(Provider, { store: store },
        React.createElement(CalendarComponent, { languageChoice: "fr", yearMin: 2001, yearMax: 2120, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" })));
};
//# sourceMappingURL=index.js.map