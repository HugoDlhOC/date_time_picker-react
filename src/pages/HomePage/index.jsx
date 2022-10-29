import Calendar from "../../components/Calendar";
import { enUS, es, fr, it, af } from "date-fns/esm/locale";
import { useContext } from "react";
import { ReturnDateContext } from "../../context/ReturnDateContext";
import { ru } from "date-fns/locale";

const HomePage = () => {
  //const { returnDate } = useContext(ReturnDateContext);
  return (
    <div>
      <h1>Page test</h1>
      <Calendar
        languageChoice={fr}
        intervalBefore={1960}
        intervalAfter={2050}
      />
    </div>
  );
};

export default HomePage;
