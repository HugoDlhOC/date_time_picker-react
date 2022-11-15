import CalendarComponent from "./components/Calendar";
import { Provider } from "react-redux";
import { store } from "./app/store";

export const Calendar = () => {
  return (
    <Provider store={store}>
      <CalendarComponent />
    </Provider>
  );
};
