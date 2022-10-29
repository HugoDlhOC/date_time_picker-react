import Select from "react-select";
import { useContext, useState } from "react";
import { DateContext } from "../../context/DateContext";
import defineYearsSelect from "../../services/defineYearsSelect";
import { YearsIntervalContext } from "../../context/YearsIntervalContext";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, defineYearsInterval } from "../../feature/calendarSlice";

const YearSelect = () => {
  //redux
  const dispatch = useDispatch();

  //context
  //const { setDate } = useContext(DateContext);
  const date = useSelector((state) => state.calendar.date);

  //context
  //const { setYearsInterval } = useContext(YearsIntervalContext);
  const yearMin = useSelector((state) => state.calendar.yearMin);
  const yearMax = useSelector((state) => state.calendar.yearMax);

  const years = defineYearsSelect(yearMin, yearMax);

  //changement d'année
  const handleSelectChangeYear = (option) => {
    let saveDate = date;
    saveDate.setYear(option.value);

    //donner le changement à react context
    dispatch(changeDate({ date: saveDate }));
    //setDate(saveDate);
    dispatch(
      defineYearsInterval({
        yearMin: years[0].value,
        yearMax: years[years.length - 1].value,
      })
    );
    /*setYearsInterval({
      yearMin: years[0].value,
      yearMax: years[years.length - 1].value,
    });*/
  };
  return (
    <div>
      <Select
        defaultValue={years.filter((item) => item.value === 2022)}
        onChange={handleSelectChangeYear}
        value={years.filter((item) => item.value === date.getFullYear())}
        options={years}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};
export default YearSelect;
