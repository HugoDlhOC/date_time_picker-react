"use strict";
var _a;
exports.__esModule = true;
exports.changeReturnFormat = exports.defineYearsInterval = exports.openCalendar = exports.defineReturnDate = exports.changeLanguage = exports.changeDate = exports.calendarSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isOpen: false,
    date: new Date().toISOString(),
    language: "enUS",
    returnDate: "",
    yearMin: new Date().getFullYear() - 50,
    yearMax: new Date().getFullYear() + 50,
    returnFormat: "MM/dd/yyyy"
};
exports.calendarSlice = (0, toolkit_1.createSlice)({
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
exports["default"] = exports.calendarSlice.reducer;
exports.changeDate = (_a = exports.calendarSlice.actions, _a.changeDate), exports.changeLanguage = _a.changeLanguage, exports.defineReturnDate = _a.defineReturnDate, exports.openCalendar = _a.openCalendar, exports.defineYearsInterval = _a.defineYearsInterval, exports.changeReturnFormat = _a.changeReturnFormat;
//# sourceMappingURL=calendarSlice.js.map