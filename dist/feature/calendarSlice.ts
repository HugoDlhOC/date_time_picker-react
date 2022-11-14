import { createSlice } from "@reduxjs/toolkit";

type Calendar = {
  isOpen: boolean;
  date: string;
  language: string;
  returnDate: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
};

const initialState: Calendar = {
  isOpen: false,
  date: new Date().toISOString(),
  language: "enUS",
  returnDate: "",
  yearMin: new Date().getFullYear() - 50,
  yearMax: new Date().getFullYear() + 50,
  returnFormat: "MM/dd/yyyy",
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

    changeReturnFormat: (state, action) => {
      const { returnFormat } = action.payload;
      state.returnFormat = returnFormat;
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
  changeReturnFormat,
} = calendarSlice.actions;
