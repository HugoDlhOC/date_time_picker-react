import DateContextProvider from "./context/DateContext";
import HomePage from "./pages/HomePage";
import LanguageContextProvider from "./context/LanguageContext";
import ReturnDateContextProvider from "./context/ReturnDateContext";
import YearsIntervalContextProvider from "./context/YearsIntervalContext";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
