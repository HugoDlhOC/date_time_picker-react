import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import { RootState } from "../../app/store";

/**
 * This component allows to define the behavior of the next arrow. When the user clicks on it, the days of the next month will be displayed.
 * @returns JSX
 */
const NextButton = () => {
  //redux
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.calendar.date);
  const dateConvert = new Date(date);

  //next month button
  const handleNextMonth = () => {
    let saveDate = dateConvert;
    dispatch(changeDate({ date: addMonths(saveDate, 1).toISOString() }));
  };

  return (
    <div>
      <button
        onClick={handleNextMonth}
        className={"button-navigation"}
        id={"button-next-arrow"}
      >
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className={"button-navigation--icon"}
          size={"xl"}
          color={"white"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};
export default NextButton;
