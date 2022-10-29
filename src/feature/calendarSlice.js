import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
  isOpen: false,
  date: new Date(),
  language: "enUS",
  returnDate: format(new Date(), "MM/dd/yyyy"),
  yearMin: new Date().getFullYear() - 50,
  yearMax: new Date().getFullYear() + 50,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,

  reducers: {
    changeDate: (state, action) => {
      const { date } = action.payload;
      state.date = date;
    },

    changeLanguage: (state, action) => {
      const { language } = action.payload;
      state.language = language;
    },

    defineReturnDate: (state, action) => {
      const { returnDate } = action.payload;
      state.returnDate = returnDate;
    },

    openCalendar: (state, action) => {
      const { isOpen } = action.payload;
      state.isOpen = isOpen;
    },

    defineYearsInterval: (state, action) => {
      const { yearMin, yearMax } = action.payload;
      state.yearMin = yearMin;
      state.yearMax = yearMax;
    },
  },
});

export default calendarSlice.reducer;
export const {
  changeDate,
  changeLanguage,
  defineReturnDate,
  openCalendar,
  defineYearsInterval,
} = calendarSlice.actions;
