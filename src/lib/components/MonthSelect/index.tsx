import Select from "react-select";
import * as listOfLanguage from "date-fns/esm/locale";
import React, { useContext } from "react";
import styleMonthSelect from "../../services/configStyleMonthSelect";
import CalendarContext from "../../context/CalendarContext";

/**
 * This component represents the select offering the different months that the user can select.
 * @returns JSX
 */
const MonthSelect = () => {
  const calendarContext = useContext(CalendarContext);

  const dateConvert = new Date(calendarContext.date);

  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item) => item === calendarContext.language
  );

  //definition of the list of months for the select
  const monthsNames = Array.from(Array(12).keys()).map((i) => {
    // @ts-ignore
    return listOfLanguage[
      Object.keys(listOfLanguage)[indexListOfLanguage]
    ].localize.month(i, { width: "full" });
  });

  const months: Array<any> = [];

  monthsNames.map((item, index) => months.push({ label: item, value: index }));

  type Option = {
    label: string;
    value: number;
  };

  //month change
  const handleSelectChangeMonth = (option: Option) => {
    let saveDate = new Date(calendarContext.date);
    saveDate.setMonth(option.value);

    calendarContext.setDate(new Date(saveDate).toISOString());
  };

  return (
    <div>
      <label htmlFor={"months"}></label>
      <Select
        defaultValue={months.find(
          (item) => item.value === dateConvert.getMonth()
        )}
        value={months.find((item) => item.value === dateConvert.getMonth())}
        onChange={handleSelectChangeMonth}
        options={months}
        isSearchable={false}
        isClearable={false}
        data-testid={"months-select"}
        id={calendarContext.idMonthSelect}
        aria-label={"months"}
        styles={styleMonthSelect}
      />
    </div>
  );
};

export default MonthSelect;
