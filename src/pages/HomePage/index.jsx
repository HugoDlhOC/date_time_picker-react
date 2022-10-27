import Calendar from "../../components/Calendar";
import { enUS, es, fr } from "date-fns/esm/locale";
import { useContext } from "react";
import { ReturnDateContext } from "../../context/ReturnDateContext";

const HomePage = () => {
  const { returnDate } = useContext(ReturnDateContext);
  return (
    <div>
      <h1>Page test</h1>
      <Calendar languageChoice={"fr"} />
    </div>
  );
};

export default HomePage;
