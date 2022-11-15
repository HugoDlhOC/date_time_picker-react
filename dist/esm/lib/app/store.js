import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../feature/calendarSlice";
export var store = configureStore({
    reducer: {
        calendar: calendarReducer
    }
});
//# sourceMappingURL=store.js.map