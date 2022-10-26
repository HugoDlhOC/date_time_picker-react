import Select from "react-select";
import { useContext, useEffect, useState } from "react";
import { DateContext } from "../../context/DateContext";
import { LanguageContext } from "../../context/LanguageContext";
import { enUS, es, fr } from "date-fns/esm/locale";

const MonthSelect = () => {
  //context
  const { date, dispatch } = useContext(DateContext);

  //context
  const { language } = useContext(LanguageContext);

  //définition de la liste des mois pour le select
  const monthsNames = [...Array(12).keys()].map((i) => {
    switch (language) {
      case "fr":
        return fr.localize.month(i, { width: "full" });
      case "es":
        return es.localize.month(i, { width: "full" });
      default:
        return enUS.localize.month(i, { width: "full" });
    }
  });

  const months = [];
  monthsNames.map((item, index) => months.push({ label: item, value: index }));

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
