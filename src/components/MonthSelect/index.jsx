import Select from "react-select";
import { enUS, es, fr } from "date-fns/esm/locale";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const MonthSelect = () => {
  //redux
  const dispatch = useDispatch();

  //redux
  const date = useSelector((state) => state.calendar.date);

  const language = useSelector((state) => state.calendar.language);

  const choiceVar = fr;
  console.log(choiceVar);
  console.log(language);

  //définition de la liste des mois pour le select
  const monthsNames = [...Array(12).keys()].map((i) => {
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
