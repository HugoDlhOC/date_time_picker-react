import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { subMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const PreviousButton = () => {
  //redux
  const dispatch = useDispatch();

  const date = useSelector((state) => state.calendar.date);

  //bouton mois précédent
  const handlePreviousMonth = () => {
    let saveDate = date;
    dispatch(changeDate({ date: subMonths(saveDate, 1) }));
  };
  return (
    <div>
      <button onClick={handlePreviousMonth} className={"button-navigation"}>
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
