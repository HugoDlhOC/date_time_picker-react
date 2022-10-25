import Select from "react-select";
import { months } from "../../data/months";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";

const MonthSelect = () => {
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
  //changement de mois
  const handleSelectChangeMonth = (option) => {
    const dayValue = date.day;
    let monthValue = month.value;
    let yearValue = date.year;
    setMonth(option);

    //donner le changement à react context
    dispatch({
      type: "CHANGE_DATE",
      date: { day: dayValue, month: monthValue, year: yearValue },
    });
    console.log(date.day);
    console.log(date.month);
    console.log(date.year);
  };
  return (
    <div>
      <Select
        onChange={handleSelectChangeMonth}
        options={months}
        value={month}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};

export default MonthSelect;
