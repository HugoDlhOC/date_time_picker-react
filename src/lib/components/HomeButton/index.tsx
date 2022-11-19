import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

/**
 * This component represents the Home Button, when the user will click on the Home button, he will be redirected to the current month.
 * @returns JSX
 */
const HomeButton = () => {
  const calendarContext = useContext(CalendarContext);

  //home button = returns to the current date
  const handleHome = () => {
    const actualDate = new Date().toISOString();

    calendarContext.setDate(actualDate);
  };

  return (
    <div>
      <button
        onClick={handleHome}
        className={"button-navigation"}
        aria-label="Home Current Month"
        type={"button"}
      >
        <FontAwesomeIcon
          icon={faHome}
          className={"button-navigation--icon"}
          size={"lg"}
          color={"white"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default HomeButton;
