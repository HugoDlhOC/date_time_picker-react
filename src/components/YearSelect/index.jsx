import Select from "react-select";
import defineYearsSelect from "../../services/defineYearsSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, defineYearsInterval } from "../../feature/calendarSlice";

const YearSelect = () => {
  //redux
  const dispatch = useDispatch();

  const date = useSelector((state) => state.calendar.date);

  const yearMin = useSelector((state) => state.calendar.yearMin);
  const yearMax = useSelector((state) => state.calendar.yearMax);

  const years = defineYearsSelect(yearMin, yearMax);

  //changement d'année
  const handleSelectChangeYear = (option) => {
    let saveDate = date;
    saveDate.setYear(option.value);

    //donner le changement à react context
    dispatch(changeDate({ date: new Date(saveDate) }));
    dispatch(
      defineYearsInterval({
        yearMin: years[0].value,
        yearMax: years[years.length - 1].value,
      })
    );
  };
  return (
    <div>
      <Select
        defaultValue={years.find((item) => item.value === 2022)}
        onChange={handleSelectChangeYear}
        value={years.find((item) => item.value === date.getFullYear())}
        options={years}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};
export default YearSelect;
