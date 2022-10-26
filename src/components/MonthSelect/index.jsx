import Select from "react-select";
import { months } from "../../data/months";
import { useContext, useEffect, useState } from "react";
import { DateContext } from "../../context/DateContext";

const MonthSelect = () => {
  //context
  const { date, dispatch } = useContext(DateContext);

  //changement de mois
  const handleSelectChangeMonth = (option) => {
    let saveDate = date.date;
    saveDate.setMonth(option.value);

    //donner le changement à react context
    dispatch({
      type: "CHANGE_DATE",
      date: { date: saveDate, yearMin: date.yearMin, yearMax: date.yearMax },
    });
  };
  console.log(date.date);
  console.log(date.date.getMonth());
  return (
    <div>
      <Select
        defaultValue={months.filter(
          (item) => item.value === date.date.getMonth()
        )}
        value={months.filter((item) => item.value === date.date.getMonth())}
        onChange={handleSelectChangeMonth}
        options={months}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};

export default MonthSelect;
