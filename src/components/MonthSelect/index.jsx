import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";

const MonthSelect = () => {
  //redux
  const dispatch = useDispatch();

  //redux
  const date = useSelector((state) => state.calendar.date);
  const language = useSelector((state) => state.calendar.language);

  //définition de la liste des mois pour le select
  const monthsNames = [...Array(12).keys()].map((i) => {
    return language.localize.month(i, { width: "full" });
  });

  const months = [];

  monthsNames.map((item, index) => months.push({ label: item, value: index }));

  //changement de mois
  const handleSelectChangeMonth = (option) => {
    let saveDate = date;
    saveDate.setMonth(option.value);

    dispatch(changeDate({ date: new Date(saveDate) }));

    console.log(date);
  };
  return (
    <div>
      <Select
        defaultValue={months.find((item) => item.value === date.getMonth())}
        value={months.find((item) => item.value === date.getMonth())}
        onChange={handleSelectChangeMonth}
        options={months}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};

export default MonthSelect;
