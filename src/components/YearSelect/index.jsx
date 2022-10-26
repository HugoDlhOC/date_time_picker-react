import Select from "react-select";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";
import { months } from "../../data/months";

const YearSelect = () => {
  //context
  const { date, dispatch } = useContext(DateContext);
  const years = defineYearsSelect(50);

  //changement d'année
  const handleSelectChangeYear = (option) => {
    let saveDate = date.date;
    saveDate.setYear(option.value);

    //donner le changement à react context
    dispatch({
      type: "CHANGE_DATE",
      date: { date: saveDate },
    });
  };
  return (
    <div>
      <Select
        defaultValue={years.filter((item) => item.value === 2022)}
        onChange={handleSelectChangeYear}
        value={years.filter((item) => item.value === date.date.getFullYear())}
        options={years}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};
export default YearSelect;
