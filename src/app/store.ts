import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../feature/calendarSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
