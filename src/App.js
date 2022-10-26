import DateContextProvider from "./context/DateContext";
import HomePage from "./pages/HomePage";
import LanguageContextProvider from "./context/LanguageContext";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <LanguageContextProvider>
          <HomePage />
        </LanguageContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;
