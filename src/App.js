import DateContextProvider from "./context/DateContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <HomePage />
      </DateContextProvider>
    </div>
  );
}

export default App;
