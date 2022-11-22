import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Calendar from "../lib/components/Calendar";
import * as listOfLanguage from "date-fns/esm/locale";
describe("Given I am on a page", function () {
    describe("When I use the calendar component", function () {
        test("Then the calendar should be rendered", function () {
            render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            //@ts-ignore
            var element = screen.getAllByTestId("calendar");
            expect(element).not.toBeNull();
        });
        test("Then, if the maximum year is greater than current year + 1000, then we must have an error displayed", function () {
            expect(function () {
                render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 1990, yearMax: new Date().getFullYear() + 2000, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            }).toThrow("The given value is too high, it cannot be higher than the current year + 1000");
        });
        test("Then, if the minimum year is lower than current year - 1000, then we must have an error displayed", function () {
            expect(function () {
                render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: new Date().getFullYear() - 2000, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            }).toThrow("The given value is too low, it cannot be lower than the current year - 1000");
        });
        test("Then, if the chosen language is not available in the proposed languages, then an error is displayed", function () {
            expect(function () {
                render(React.createElement(Calendar, { languageChoice: "france", yearMin: 2001, yearMax: 2030, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            }).toThrow("language not found, inspect date-fns documentation for a list of languages available");
        });
        test("Then, if the format the user wants is not available in date-fns, then an error is displayed", function () {
            expect(function () {
                render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 2001, yearMax: 2030, returnFormat: "day/month/years", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            }).toThrow("The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns.");
        });
        test("Then, if current year is not present in the interval [yearMin, yearMax], then error is displayed", function () {
            expect(function () {
                render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 1990, yearMax: new Date().getFullYear() + 2000, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            }).toThrow("The given value is too high, it cannot be higher than the current year + 1000");
        });
        test("Then, if the user click on home button, we have the current month.", function () {
            render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === "enUS"; });
            //definition of the list of months fo the current language
            var monthsNames = Array.from(Array(12).keys()).map(function (i) {
                // @ts-ignore
                return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
            });
            //currentMonth
            var currentMonth = monthsNames.find(function (_item, index) { return index === new Date().getMonth(); });
            var inputCalendar = screen.getByTestId("input-calendar");
            fireEvent.click(inputCalendar);
            var homeButton = screen.getByTestId("button-home-navigation");
            fireEvent.click(homeButton);
            var dateItem = screen.getAllByText(currentMonth);
            expect(dateItem).not.toBeUndefined();
            expect(homeButton).not.toBeNull();
        });
        test("Then, if the user click on next button, we have the next month.", function () {
            render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === "enUS"; });
            //definition of the list of months fo the current language
            var monthsNames = Array.from(Array(12).keys()).map(function (i) {
                // @ts-ignore
                return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
            });
            //currentMonth
            var nextMonth = monthsNames.find(function (_item, index) { return index === new Date().getMonth() + 1; });
            var inputCalendar = screen.getByTestId("input-calendar");
            fireEvent.click(inputCalendar);
            var nextButton = screen.getByTestId("button-next-arrow");
            fireEvent.click(nextButton);
            var dateItem = screen.getAllByText(nextMonth);
            expect(dateItem).not.toBeUndefined();
            expect(nextButton).not.toBeNull();
        });
        test("Then, if the user click on previous button, we have the previous month.", function () {
            render(React.createElement(Calendar, { languageChoice: "enUS", yearMin: 1990, yearMax: 2080, returnFormat: "dd/MM/yyyy", defaultDate: new Date(), labelContent: "Date", nameField: "calendar" }));
            var indexListOfLanguage = Object.keys(listOfLanguage).findIndex(function (item) { return item === "enUS"; });
            //definition of the list of months fo the current language
            var monthsNames = Array.from(Array(12).keys()).map(function (i) {
                // @ts-ignore
                return listOfLanguage[Object.keys(listOfLanguage)[indexListOfLanguage]].localize.month(i, { width: "full" });
            });
            //currentMonth
            var previousMonth = monthsNames.find(function (_item, index) { return index === new Date().getMonth() - 1; });
            var inputCalendar = screen.getByTestId("input-calendar");
            fireEvent.click(inputCalendar);
            var previousButton = screen.getByTestId("button-previous-arrow");
            fireEvent.click(previousButton);
            var dateItem = screen.getAllByText(previousMonth);
            expect(dateItem).not.toBeUndefined();
            expect(previousButton).not.toBeNull();
        });
    });
});
//# sourceMappingURL=app.test.js.map