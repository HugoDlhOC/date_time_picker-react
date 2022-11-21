"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = require("@testing-library/react");
var react_2 = tslib_1.__importDefault(require("react"));
var Calendar_1 = tslib_1.__importDefault(require("../lib/components/Calendar"));
var listOfLanguage = tslib_1.__importStar(require("date-fns/esm/locale"));
describe("Given I am on a page", function () {
    describe("When I use the calendar component", function () {
        test("Then the calendar should be rendered", function () {
            (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            //@ts-ignore
            var element = react_1.screen.getAllByTestId("calendar");
            expect(element).not.toBeNull();
        });
        test("Then, if the maximum year is greater than current year + 1000, then we must have an error displayed", function () {
            expect(function () {
                (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 1990, yearMax: new Date().getFullYear() + 2000, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            }).toThrow("The given value is too high, it cannot be higher than the current year + 1000");
        });
        test("Then, if the minimum year is lower than current year - 1000, then we must have an error displayed", function () {
            expect(function () {
                (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: new Date().getFullYear() - 2000, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            }).toThrow("The given value is too low, it cannot be lower than the current year - 1000");
        });
        test("Then, if the chosen language is not available in the proposed languages, then an error is displayed", function () {
            expect(function () {
                (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "france", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            }).toThrow("language not found, inspect date-fns documentation for a list of languages available");
        });
        test("Then, if the format the user wants is not available in date-fns, then an error is displayed", function () {
            expect(function () {
                (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 2001, yearMax: 2030, returnFormat: "day/month/years", defaultDate: new Date(), labelContent: "Date" }));
            }).toThrow("The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns.");
        });
        test("Then, if current year is not present in the interval [yearMin, yearMax], then error is displayed", function () {
            expect(function () {
                (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 1990, yearMax: new Date().getFullYear() + 2000, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            }).toThrow("The given value is too high, it cannot be higher than the current year + 1000");
        });
        test("Then, if the user click on home button, we have the current month.", function () {
            (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === "enUS"; });
            //definition of the list of months fo the current language
            var monthsNames = Array.from(Array(12).keys()).map(function (i) {
                // @ts-ignore
                return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
            });
            //currentMonth
            var currentMonth = monthsNames.find(function (_item, index) { return index === new Date().getMonth(); });
            var inputCalendar = react_1.screen.getByTestId("input-calendar");
            react_1.fireEvent.click(inputCalendar);
            var homeButton = react_1.screen.getByTestId("button-home-navigation");
            react_1.fireEvent.click(homeButton);
            var dateItem = react_1.screen.getAllByText(currentMonth);
            expect(dateItem).not.toBeUndefined();
            expect(homeButton).not.toBeNull();
        });
        test("Then, if the user click on next button, we have the next month.", function () {
            (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === "enUS"; });
            //definition of the list of months fo the current language
            var monthsNames = Array.from(Array(12).keys()).map(function (i) {
                // @ts-ignore
                return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
            });
            //currentMonth
            var nextMonth = monthsNames.find(function (_item, index) { return index === new Date().getMonth() + 1; });
            var inputCalendar = react_1.screen.getByTestId("input-calendar");
            react_1.fireEvent.click(inputCalendar);
            var nextButton = react_1.screen.getByTestId("button-next-arrow");
            react_1.fireEvent.click(nextButton);
            var dateItem = react_1.screen.getAllByText(nextMonth);
            expect(dateItem).not.toBeUndefined();
            expect(nextButton).not.toBeNull();
        });
        test("Then, if the user click on previous button, we have the previous month.", function () {
            (0, react_1.render)(react_2["default"].createElement(Calendar_1["default"], { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date" }));
            var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === "enUS"; });
            //definition of the list of months fo the current language
            var monthsNames = Array.from(Array(12).keys()).map(function (i) {
                // @ts-ignore
                return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
            });
            //currentMonth
            var previousMonth = monthsNames.find(function (_item, index) { return index === new Date().getMonth() - 1; });
            var inputCalendar = react_1.screen.getByTestId("input-calendar");
            react_1.fireEvent.click(inputCalendar);
            var previousButton = react_1.screen.getByTestId("button-previous-arrow");
            react_1.fireEvent.click(previousButton);
            var dateItem = react_1.screen.getAllByText(previousMonth);
            expect(dateItem).not.toBeUndefined();
            expect(previousButton).not.toBeNull();
        });
    });
});
//# sourceMappingURL=app.test.js.map