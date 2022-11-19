import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { subMonths } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

/**
 * This component allows to define the behavior of the previous arrow. When the user clicks on it, the days of the previous month will be displayed.
 * @returns JSX
 */
const PreviousButton = () => {
  const calendarContext = useContext(CalendarContext);

  const dateConvert = new Date(calendarContext.date);

  //previous month button
  const handlePreviousMonth = () => {
    let saveDate = dateConvert;

    calendarContext.setDate(subMonths(saveDate, 1).toISOString());
  };
  return (
    <div>
      <button
        type={"button"}
        onClick={handlePreviousMonth}
        className={"button-navigation"}
        id={"button-previous-arrow"}
        data-testid={"button-previous-arrow"}
        aria-label="Previous Month"
      >
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className={"button-navigation--icon"}
          size={"lg"}
          color={"white"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default PreviousButton;
