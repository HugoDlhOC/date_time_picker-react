import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";

const Navigation = () => {
  return (
    <nav className={"navigation-datepicker"}>
      <PreviousButton />
      <HomeButton />
      <MonthSelect />
      <YearSelect />
      <NextButton />
    </nav>
  );
};

export default Navigation;
