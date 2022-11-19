import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addMonths } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

/**
 * This component allows to define the behavior of the next arrow. When the user clicks on it, the days of the next month will be displayed.
 * @returns JSX
 */
const NextButton = () => {
  const calendarContext = useContext(CalendarContext);

  const dateConvert = new Date(calendarContext.date);

  //next month button
  const handleNextMonth = () => {
    let saveDate = dateConvert;

    calendarContext.setDate(addMonths(saveDate, 1).toISOString());
  };

  return (
    <div>
      <button
        type={"button"}
        onClick={handleNextMonth}
        className={"button-navigation"}
        id={"button-next-arrow"}
        data-testid={"button-next-arrow"}
        aria-label="Next Month"
      >
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className={"button-navigation--icon"}
          size={"lg"}
          color={"white"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};
export default NextButton;
