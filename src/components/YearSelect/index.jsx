import Select from "react-select";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import { months } from "../../data/months";
import defineYearsSelect from "../../services/defineYearsSelect";

const YearSelect = () => {
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
  //changement d'année
  const handleSelectChangeYear = (option) => {
    setYear(option);

    //donner le changement à react context
    dispatch({
      type: "CHANGE_DATE",
      date: { day: date.day, month: date.month, year: year.value },
    });
  };
  return (
    <div>
      <Select
        defaultValue={years.filter((item) => item.value === date.year)}
        onChange={handleSelectChangeYear}
        value={year}
        options={years}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};
export default YearSelect;
