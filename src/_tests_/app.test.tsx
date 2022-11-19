import { render, screen } from "@testing-library/react";
import React from "react";
import Calendar from "../lib/components/Calendar";

describe("Given I am on a page", () => {
  describe("When I use the calendar component", () => {
    test("Then the calendar should be rendered", () => {
      render(
        <Calendar
          languageChoice={"fr"}
          yearMin={1990}
          yearMax={2080}
          returnFormat={"dd/MM/yyyy"}
          defaultDate={new Date()}
          labelContent={"Date"}
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
            languageChoice={"fr"}
            yearMin={1990}
            yearMax={new Date().getFullYear() + 2000}
            returnFormat={"dd/MM/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date"}
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
            languageChoice={"fr"}
            yearMin={new Date().getFullYear() - 2000}
            yearMax={2030}
            returnFormat={"dd/MM/yyyy"}
            defaultDate={new Date()}
            labelContent={"Date"}
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
            languageChoice={"fr"}
            yearMin={2001}
            yearMax={2030}
            returnFormat={"day/month/years"}
            defaultDate={new Date()}
            labelContent={"Date"}
          />
        );
      }).toThrow(
        "The format passed in props does not conform to the expectations of date-fns, consult the documentation of date-fns."
      );
    });
  });
});
