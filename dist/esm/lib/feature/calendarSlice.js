var _a;
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    isOpen: false,
    date: new Date().toISOString(),
    language: "enUS",
    returnDate: "",
    yearMin: new Date().getFullYear() - 50,
    yearMax: new Date().getFullYear() + 50,
    returnFormat: "MM/dd/yyyy"
};
export var calendarSlice = createSlice({
    name: "calendar",
    initialState: initialState,
    reducers: {
        changeDate: function (state, action) {
            var date = action.payload.date;
            state.date = date;
        },
        changeLanguage: function (state, action) {
            var language = action.payload.language;
            state.language = language;
        },
        defineReturnDate: function (state, action) {
            var returnDate = action.payload.returnDate;
            state.returnDate = returnDate;
        },
        openCalendar: function (state, action) {
            var isOpen = action.payload.isOpen;
            state.isOpen = isOpen;
        },
        defineYearsInterval: function (state, action) {
            var _a = action.payload, yearMin = _a.yearMin, yearMax = _a.yearMax;
            state.yearMin = yearMin;
            state.yearMax = yearMax;
        },
        changeReturnFormat: function (state, action) {
            var returnFormat = action.payload.returnFormat;
            state.returnFormat = returnFormat;
        }
    }
});
export default calendarSlice.reducer;
export var changeDate = (_a = calendarSlice.actions, _a.changeDate), changeLanguage = _a.changeLanguage, defineReturnDate = _a.defineReturnDate, openCalendar = _a.openCalendar, defineYearsInterval = _a.defineYearsInterval, changeReturnFormat = _a.changeReturnFormat;
//# sourceMappingURL=calendarSlice.js.map