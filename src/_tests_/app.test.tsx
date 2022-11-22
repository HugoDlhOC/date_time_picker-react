import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Calendar from "../lib/components/Calendar";
import * as listOfLanguage from "date-fns/esm/locale";

describe("Given I am on a page", () => {
  describe("When I use the calendar component", () => {
    test("Then the calendar should be rendered", () => {
      render(
        <Calendar
          languageChoice={"enUS"}
          yearMin={1990}
          yearMax={2080}
          returnFormat={"dd/MM/yyyy"}
          defaultDate={new Date()}
          labelContent={"Date"}
          nameInput={"calendar"}
          idCalendar={"input-calendar"}
          idYearSelect={"years"}
          idMonthSelect={"months"}
        />
      );

      //@ts-ignore
      const element = screen.getAllByTestId("calendar");

      expect(element).not.toBeNull();
    });

    test("Then, if the maximum year is greater than current year + 1000, then we must have an error displayed", () => {
      expect(() => {
        render(
          <Calendar
            languageChoice={"enUS"}
            yearMin={1990}
            yearMax={new Date().getFullYear() + 2000}
            returnFormat={"dd/MM/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date"}
            nameInput={"calendar"}
            idCalendar={"input-calendar"}
            idYearSelect={"years"}
            idMonthSelect={"months"}
          />
        );
      }).toThrow(
        "The given value is too high, it cannot be higher than the current year + 1000"
      );
    });

    test("Then, if the minimum year is lower than current year - 1000, then we must have an error displayed", () => {
      expect(() => {
        render(
          <Calendar
            languageChoice={"enUS"}
            yearMin={new Date().getFullYear() - 2000}
            yearMax={2030}
            returnFormat={"dd/MM/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date"}
            nameInput={"calendar"}
            idCalendar={"input-calendar"}
            idYearSelect={"years"}
            idMonthSelect={"months"}
          />
        );
      }).toThrow(
        "The given value is too low, it cannot be lower than the current year - 1000"
      );
    });

    test("Then, if the chosen language is not available in the proposed languages, then an error is displayed", () => {
      expect(() => {
        render(
          <Calendar
            languageChoice={"france"}
            yearMin={2001}
            yearMax={2030}
            returnFormat={"dd/MM/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date"}
            nameInput={"calendar"}
            idCalendar={"input-calendar"}
            idYearSelect={"years"}
            idMonthSelect={"months"}
          />
        );
      }).toThrow(
        "language not found, inspect date-fns documentation for a list of languages available"
      );
    });

    test("Then, if the format the user wants is not available in date-fns, then an error is displayed", () => {
      expect(() => {
        render(
          <Calendar
            languageChoice={"enUS"}
            yearMin={2001}
            yearMax={2030}
            returnFormat={"day/month/years"}
            defaultDate={new Date()}
            labelContent={"Date"}
            nameInput={"calendar"}
            idCalendar={"input-calendar"}
            idYearSelect={"years"}
            idMonthSelect={"months"}
          />
        );
      }).toThrow(
        "The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns."
      );
    });

    test("Then, if current year is not present in the interval [yearMin, yearMax], then error is displayed", () => {
      expect(() => {
        render(
          <Calendar
            languageChoice={"enUS"}
            yearMin={1990}
            yearMax={new Date().getFullYear() + 2000}
            returnFormat={"dd/MM/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date"}
            nameInput={"calendar"}
            idCalendar={"input-calendar"}
            idYearSelect={"years"}
            idMonthSelect={"months"}
          />
        );
      }).toThrow(
        "The given value is too high, it cannot be higher than the current year + 1000"
      );
    });

    test("Then, if the user click on home button, we have the current month.", () => {
      render(
        <Calendar
          languageChoice={"enUS"}
          yearMin={1990}
          yearMax={2080}
          returnFormat={"dd/MM/yyyy"}
          defaultDate={new Date()}
          labelContent={"Date"}
          nameInput={"calendar"}
          idCalendar={"input-calendar"}
          idYearSelect={"years"}
          idMonthSelect={"months"}
        />
      );

      const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
        (item) => item === "enUS"
      );

      //definition of the list of months fo the current language
      const monthsNames = Array.from(Array(12).keys()).map((i) => {
        // @ts-ignore
        return listOfLanguage[
          Object.keys(listOfLanguage)[indexListOfLanguage]
        ].localize.month(i, { width: "full" });
      });

      //currentMonth
      const currentMonth = monthsNames.find(
        (_item, index) => index === new Date().getMonth()
      );
      const inputCalendar = screen.getByTestId("input-calendar");
      fireEvent.click(inputCalendar);
      const homeButton = screen.getByTestId("button-home-navigation");
      fireEvent.click(homeButton);
      const dateItem = screen.getAllByText(currentMonth);

      expect(dateItem).not.toBeUndefined();
      expect(homeButton).not.toBeNull();
    });

    test("Then, if the user click on next button, we have the next month.", () => {
      render(
        <Calendar
          languageChoice={"enUS"}
          yearMin={1990}
          yearMax={2080}
          returnFormat={"dd/MM/yyyy"}
          defaultDate={new Date()}
          labelContent={"Date"}
          nameInput={"calendar"}
          idCalendar={"input-calendar"}
          idYearSelect={"years"}
          idMonthSelect={"months"}
        />
      );

      const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
        (item) => item === "enUS"
      );

      //definition of the list of months fo the current language
      const monthsNames = Array.from(Array(12).keys()).map((i) => {
        // @ts-ignore
        return listOfLanguage[
          Object.keys(listOfLanguage)[indexListOfLanguage]
        ].localize.month(i, { width: "full" });
      });

      //currentMonth
      const nextMonth = monthsNames.find(
        (_item, index) => index === new Date().getMonth() + 1
      );
      const inputCalendar = screen.getByTestId("input-calendar");
      fireEvent.click(inputCalendar);
      const nextButton = screen.getByTestId("button-next-arrow");
      fireEvent.click(nextButton);
      const dateItem = screen.getAllByText(nextMonth);

      expect(dateItem).not.toBeUndefined();
      expect(nextButton).not.toBeNull();
    });

    test("Then, if the user click on previous button, we have the previous month.", () => {
      render(
        <Calendar
          languageChoice={"enUS"}
          yearMin={1990}
          yearMax={2080}
          returnFormat={"dd/MM/yyyy"}
          defaultDate={new Date()}
          labelContent={"Date"}
          nameInput={"calendar"}
          idCalendar={"input-calendar"}
          idYearSelect={"years"}
          idMonthSelect={"months"}
        />
      );

      const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
        (item) => item === "enUS"
      );

      //definition of the list of months fo the current language
      const monthsNames = Array.from(Array(12).keys()).map((i) => {
        // @ts-ignore
        return listOfLanguage[
          Object.keys(listOfLanguage)[indexListOfLanguage]
        ].localize.month(i, { width: "full" });
      });

      //currentMonth
      const previousMonth = monthsNames.find(
        (_item, index) => index === new Date().getMonth() - 1
      );
      const inputCalendar = screen.getByTestId("input-calendar");
      fireEvent.click(inputCalendar);
      const previousButton = screen.getByTestId("button-previous-arrow");
      fireEvent.click(previousButton);
      const dateItem = screen.getAllByText(previousMonth);

      expect(dateItem).not.toBeUndefined();
      expect(previousButton).not.toBeNull();
    });
  });
});
