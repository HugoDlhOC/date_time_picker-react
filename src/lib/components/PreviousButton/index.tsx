import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { subMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import { RootState } from "../../app/store";
import React from "react";

/**
 * This component allows to define the behavior of the previous arrow. When the user clicks on it, the days of the previous month will be displayed.
 * @returns JSX
 */
const PreviousButton = () => {
  //redux
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.calendar.date);
  const dateConvert = new Date(date);

  //previous month button
  const handlePreviousMonth = () => {
    let saveDate = dateConvert;
    dispatch(changeDate({ date: subMonths(saveDate, 1).toISOString() }));
  };
  return (
    <div>
      <button
        onClick={handlePreviousMonth}
        className={"button-navigation"}
        id={"button-previous-arrow"}
        data-testid={"button-previous-arrow"}
        aria-label="Previous Month"
      >
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className={"button-navigation--icon"}
          size={"xl"}
          color={"white"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default PreviousButton;
