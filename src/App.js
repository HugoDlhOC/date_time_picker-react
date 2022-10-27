import DateContextProvider from "./context/DateContext";
import HomePage from "./pages/HomePage";
import LanguageContextProvider from "./context/LanguageContext";
import ReturnDateContextProvider from "./context/ReturnDateContext";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <LanguageContextProvider>
          <ReturnDateContextProvider>
            <HomePage />
          </ReturnDateContextProvider>
        </LanguageContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;
