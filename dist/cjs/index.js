"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var tslib_1 = require("tslib");
var CalendarComponent_1 = tslib_1.__importDefault(require("./lib/components/CalendarComponent"));
var react_redux_1 = require("react-redux");
var store_1 = require("./lib/app/store");
var react_1 = tslib_1.__importDefault(require("react"));
var Calendar = function () {
    return (react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(CalendarComponent_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2120, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" })));
};
exports.Calendar = Calendar;
//# sourceMappingURL=index.js.map