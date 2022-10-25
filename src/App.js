import logo from "./logo.svg";
import Navigation from "./components/Navigation";
import CalendarBody from "./components/CalendarBody";
import DateContextProvider from "./context/DateContext";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <Navigation />
        <CalendarBody />
      </DateContextProvider>
    </div>
  );
}

export default App;
