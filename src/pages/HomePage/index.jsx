import Calendar from "../../components/Calendar";
import { enUS, es, fr, it, af } from "date-fns/esm/locale";

const HomePage = () => {
  return (
    <div>
      <h1>Page test</h1>
      <Calendar
        languageChoice={"fr"}
        yearMin={1022}
        yearMax={3022}
        returnFormat={"dd/MM/yyyy"}
      />
    </div>
  );
};

export default HomePage;
