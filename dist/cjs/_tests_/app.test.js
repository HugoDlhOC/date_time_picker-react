"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = require("@testing-library/react");
var Calendar_1 = tslib_1.__importDefault(require("../lib/components/Calendar"));
var react_redux_1 = require("react-redux");
var store_1 = require("../lib/app/store");
var react_2 = tslib_1.__importDefault(require("react"));
var render = function (component) {
    return (0, react_1.render)(react_2["default"].createElement(react_redux_1.Provider, { store: store_1.store }, component));
};
describe("Given I am on a page", function () {
    describe("When I use the calendar component", function () {
        test("Then the calendar should be rendered", function () {
            render(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", classToggle: "calendar", defaultDate: new Date() }));
            var element = react_1.screen.getAllByTestId("calendar");
            expect(element).not.toBeNull();
        });
        test("Then, if the maximum year is greater than current year + 1000, then we must have an error displayed", function () {
            expect(function () {
                render(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 1990, yearMax: new Date().getFullYear() + 2000, returnFormat: "dd/MM/yyyy", classToggle: "calendar", defaultDate: new Date() }));
            }).toThrow("The given value is too high, it cannot be higher than the current year + 1000");
        });
        test("Then, if the minimum year is lower than current year - 1000, then we must have an error displayed", function () {
            expect(function () {
                render(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: new Date().getFullYear() - 2000, yearMax: 2030, returnFormat: "dd/MM/yyyy", classToggle: "calendar", defaultDate: new Date() }));
            }).toThrow("The given value is too low, it cannot be lower than the current year - 1000");
        });
        test("Then, if the chosen language is not available in the proposed languages, then an error is displayed", function () {
            expect(function () {
                render(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "france", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", classToggle: "calendar", defaultDate: new Date() }));
            }).toThrow("language not found, inspect date-fns documentation for a list of languages available");
        });
        test("Then, if the format the user wants is not available in date-fns, then an error is displayed", function () {
            expect(function () {
                render(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "fr", yearMin: 2001, yearMax: 2030, returnFormat: "day/month/years", classToggle: "calendar", defaultDate: new Date() }));
            }).toThrow("The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns.");
        });
    });
});
//# sourceMappingURL=app.test.js.map