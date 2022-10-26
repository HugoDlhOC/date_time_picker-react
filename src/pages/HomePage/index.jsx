import Calendar from "../../components/Calendar";
import { enUS, es, fr } from "date-fns/esm/locale";

const HomePage = () => {
  return (
    <div>
      <h1>Page test</h1>
      <Calendar languageChoice={"fr"} />
    </div>
  );
};

export default HomePage;
