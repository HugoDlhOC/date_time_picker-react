import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { months } from "../../data/months";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";
import { addMonths } from "date-fns";

const NextButton = () => {
  //context
  const { date, dispatch } = useContext(DateContext);

  //récupérer le numéro du mois en cours et son label - pour trouver le label il faut faire correspondre le chiffre du mois en cours avec le bon mois
  //on obtient une structure différente de type tableau objet alors qu'on ne veut qu'un objet : [{}]

  //bouton mois suivant
  const handleNextMonth = () => {
    let saveDate = date.date;
    dispatch({
      type: "CHANGE_DATE",
      date: { date: addMonths(saveDate, 1) },
    });
    console.log(date);
  };
  return (
    <div>
      <button onClick={handleNextMonth} className={"button-navigation"}>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className={"button-navigation--icon"}
          size={"2x"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};
export default NextButton;
