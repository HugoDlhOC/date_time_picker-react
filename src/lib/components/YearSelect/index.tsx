import Select from "react-select";
import defineYearsSelect from "../../services/defineYearsSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, defineYearsInterval } from "../../feature/calendarSlice";
import { RootState } from "../../app/store";
import React from "react";

/**
 * An interval has been defined by the developer per props.
 * @returns JSX
 */
const YearSelect = () => {
  //redux
  const dispatch = useDispatch();

  const date = useSelector((state: RootState) => state.calendar.date);
  const dateConvert = new Date(date);
  const yearMin = useSelector((state: RootState) => state.calendar.yearMin);
  const yearMax = useSelector((state: RootState) => state.calendar.yearMax);

  const years = defineYearsSelect(yearMin, yearMax);

  type Option = {
    label: string;
    value: number;
  };

  //change of year
  const handleSelectChangeYear = (option: Option) => {
    let saveDate = dateConvert;
    saveDate.setFullYear(option.value);

    dispatch(changeDate({ date: new Date(saveDate).toISOString() }));
    dispatch(
      defineYearsInterval({
        yearMin: years[0].value,
        yearMax: years[years.length - 1].value,
      })
    );
  };
  return (
    <div>
      <label htmlFor={"years"}></label>
      <Select
        defaultValue={years.find((item) => item.value === 2022)}
        //@ts-ignore
        onChange={handleSelectChangeYear}
        value={years.find((item) => item.value === dateConvert.getFullYear())}
        options={years}
        isSearchable={false}
        isClearable={false}
        data-testid={"years-select"}
        id={"years"}
        aria-label={"years"}
      />
    </div>
  );
};
export default YearSelect;
