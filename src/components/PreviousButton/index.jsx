import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { months } from "../../data/months";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";

const PreviousButton = () => {
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
  //bouton mois précédent
  const handlePreviousMonth = () => {
    const dayValue = date.day;
    let monthValue = date.month;
    let yearValue = date.year;

    //si le mois actuel est janvier, le mois précédant doit être décembre de l'année d'avant
    if (monthValue === 0) {
      monthValue = 11;
      yearValue--;
    } else {
      //sinon décrémentation simple
      monthValue--;
    }
    dispatch({
      type: "CHANGE_DATE",
      date: { day: dayValue, month: monthValue, year: yearValue },
    });
    setMonth(months.filter((item) => item.value === monthValue)[0]);
    setYear(years.filter((item) => item.value === yearValue)[0]);
  };
  return (
    <div>
      {" "}
      <button onClick={handlePreviousMonth} className={"button-navigation"}>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className={"button-navigation--icon"}
          size={"2x"}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default PreviousButton;
