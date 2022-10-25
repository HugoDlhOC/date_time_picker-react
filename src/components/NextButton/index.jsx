import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { months } from "../../data/months";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";

const NextButton = () => {
  //context
  const { date, dispatch } = useContext(DateContext);

  //récupérer le numéro du mois en cours et son label - pour trouver le label il faut faire correspondre le chiffre du mois en cours avec le bon mois
  //on obtient une structure différente de type tableau objet alors qu'on ne veut qu'un objet : [{}]
  const [month, setMonth] = useState(
    months.filter((item) => item.value === date.month)[0]
  );

  const years = defineYearsSelect(50);

  const [year, setYear] = useState(
    years.filter((item) => item.value === date.year)[0]
  );

  //bouton mois suivant
  const handleNextMonth = () => {
    const dayValue = date.day;
    let monthValue = date.month;
    let yearValue = date.year;

    //si le mois actuel est décembre, le mois suivant doit être janvier de l'année d'après
    if (monthValue === 11) {
      monthValue = 0;
      yearValue++;
    } else {
      //sinon incrémentation simple
      monthValue++;
    }
    setMonth(months.filter((item) => item.value === monthValue)[0]);
    setYear(years.filter((item) => item.value === yearValue)[0]);

    dispatch({
      type: "CHANGE_DATE",
      date: { day: dayValue, month: monthValue, year: yearValue },
    });

    console.log(month);
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
