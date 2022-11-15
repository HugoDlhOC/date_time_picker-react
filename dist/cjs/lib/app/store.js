"use strict";
exports.__esModule = true;
exports.store = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
var calendarSlice_1 = tslib_1.__importDefault(require("../feature/calendarSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        calendar: calendarSlice_1["default"]
    }
});
//# sourceMappingURL=store.js.map