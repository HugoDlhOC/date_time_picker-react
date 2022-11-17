import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import React from "react";

/**
 * This component represents the Home Button, when the user will click on the Home button, he will be redirected to the current month.
 * @returns JSX
 */
const HomeButton = () => {
  //redux
  const dispatch = useDispatch();

  //home button = returns to the current date
  const handleHome = () => {
    const actualDate = new Date().toISOString();

    dispatch(changeDate({ date: actualDate }));
  };

  return (
    <div>
      <button
        onClick={handleHome}
        className={"button-navigation"}
        aria-label="Home Current Month"
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
