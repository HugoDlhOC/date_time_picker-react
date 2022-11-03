import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addMonths } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const NextButton = () => {
  //redux
  const dispatch = useDispatch();

  const date = useSelector((state) => state.calendar.date);
  const dateConvert = new Date(date);

  //récupérer le numéro du mois en cours et son label - pour trouver le label il faut faire correspondre le chiffre du mois en cours avec le bon mois
  //on obtient une structure différente de type tableau objet alors qu'on ne veut qu'un objet : [{}]

  //bouton mois suivant
  const handleNextMonth = () => {
    let saveDate = dateConvert;
    dispatch(changeDate({ date: addMonths(saveDate, 1).toISOString() }));
  };

  return (
    <div>
      <button onClick={handleNextMonth} className={"button-navigation"}>
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
