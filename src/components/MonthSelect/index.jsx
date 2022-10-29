import Select from "react-select";
import { useContext, useEffect, useState } from "react";
import { DateContext } from "../../context/DateContext";
import { LanguageContext } from "../../context/LanguageContext";
import { enUS, es, fr } from "date-fns/esm/locale";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const MonthSelect = () => {
  //redux
  const dispatch = useDispatch();

  //context
  //const { setDate } = useContext(DateContext);
  //redux
  const date = useSelector((state) => state.calendar.date);

  //context
  //const { language } = useContext(LanguageContext);
  const language = useSelector((state) => state.calendar.language);

  const choiceVar = fr;
  console.log(choiceVar);
  console.log(language);

  //définition de la liste des mois pour le select
  const monthsNames = [...Array(12).keys()].map((i) => {
    /*switch (language) {
      case "fr":
        return language.localize.month(i, { width: "full" });
      case "es":
        return es.localize.month(i, { width: "full" });
      default:
        return enUS.localize.month(i, { width: "full" });
    }*/
    return language.localize.month(i, { width: "full" });
  });

  console.log(monthsNames);
  const months = [];

  monthsNames.map((item, index) => months.push({ label: item, value: index }));

  //changement de mois
  const handleSelectChangeMonth = (option) => {
    let saveDate = date;
    saveDate.setMonth(option.value);

    //donner le changement à react context
    dispatch(changeDate({ date: saveDate }));
    //setDate(saveDate);
    console.log(months.filter((item) => item.value === date.getMonth()));
  };
  return (
    <div>
      <Select
        defaultValue={months.filter((item) => item.value === date.getMonth())}
        value={months.filter((item) => item.value === date.getMonth())}
        onChange={handleSelectChangeMonth}
        options={months}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};

export default MonthSelect;
