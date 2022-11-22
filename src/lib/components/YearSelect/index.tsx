import Select from "react-select";
import defineYearsSelect from "../../services/defineYearsSelect";
import React, { useContext } from "react";
import configStyleYearSelect from "../../services/configStyleYearSelect";
import CalendarContext from "../../context/CalendarContext";

/**
 * An interval has been defined by the developer per props.
 * @returns JSX
 */
const YearSelect = () => {
  const calendarContext = useContext(CalendarContext);

  const dateConvert = new Date(calendarContext.date);

  const years = defineYearsSelect(
    calendarContext.yearMin,
    calendarContext.yearMax
  );

  type Option = {
    label: string;
    value: number;
  };

  //change of year
  const handleSelectChangeYear = (option: Option) => {
    let saveDate = dateConvert;
    saveDate.setFullYear(option.value);

    calendarContext.setDate(new Date(saveDate).toISOString());
    calendarContext.setYearMin(years[0].value);
    calendarContext.setYearMax(years[years.length - 1].value);
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
        styles={configStyleYearSelect}
      />
    </div>
  );
};
export default YearSelect;
