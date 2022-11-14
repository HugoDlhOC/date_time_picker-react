import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../feature/calendarSlice";
import * as listOfLanguage from "date-fns/esm/locale";
import { RootState } from "../../app/store";

/**
 * This component represents the select offering the different months that the user can select.
 * @returns JSX
 */
const MonthSelect = () => {
  //redux
  const dispatch = useDispatch();

  //redux
  const date = useSelector((state: RootState) => state.calendar.date);
  const dateConvert = new Date(date);
  const choiceUserLanguage = useSelector(
    (state: RootState) => state.calendar.language
  );

  const indexListOfLanguage = Object.keys(listOfLanguage).findIndex(
    (item, index) => item === choiceUserLanguage
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
