import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import * as listOfLanguage from "date-fns/esm/locale";

const MonthSelect = () => {
  //redux
  const dispatch = useDispatch();

  //redux
  const date = useSelector((state) => state.calendar.date);
  const dateConvert = new Date(date);
  const choiceUserLanguage = useSelector((state) => state.calendar.language);

  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item, index) => item === choiceUserLanguage
  );

  //définition de la liste des mois pour le select
  const monthsNames = [...Array(12).keys()].map((i) => {
    //return language.localize.month(i, { width: "full" });
    return listOfLanguage[
      Object.keys(listOfLanguage)[indexListOfLanguage]
    ].localize.month(i, { width: "full" });
  });

  const months = [];

  monthsNames.map((item, index) => months.push({ label: item, value: index }));

  //changement de mois
  const handleSelectChangeMonth = (option) => {
    let saveDate = new Date(date);
    saveDate.setMonth(option.value);

    dispatch(changeDate({ date: new Date(saveDate).toISOString() }));
  };
  return (
    <div>
      <Select
        defaultValue={months.find(
          (item) => item.value === dateConvert.getMonth()
        )}
        value={months.find((item) => item.value === dateConvert.getMonth())}
        onChange={handleSelectChangeMonth}
        options={months}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};

export default MonthSelect;
