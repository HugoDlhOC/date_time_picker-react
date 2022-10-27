import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { months } from "../../data/months";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";
import { subMonths } from "date-fns";

const PreviousButton = () => {
  //context
  const { date, dispatch } = useContext(DateContext);

  //bouton mois précédent
  const handlePreviousMonth = () => {
    let saveDate = date.date;
    dispatch({
      type: "CHANGE_DATE",
      date: {
        date: subMonths(saveDate, 1),
        yearMin: date.yearMin,
        yearMax: date.yearMax,
      },
    });
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
