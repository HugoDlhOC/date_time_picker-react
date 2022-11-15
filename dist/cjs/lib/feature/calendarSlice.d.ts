declare type Calendar = {
    isOpen: boolean;
    date: string;
    language: string;
    returnDate: string;
    yearMin: number;
    yearMax: number;
    returnFormat: string;
};
export declare const calendarSlice: import("@reduxjs/toolkit").Slice<Calendar, {
    changeDate: (state: import("immer/dist/internal").WritableDraft<Calendar>, action: {
        payload: any;
        type: string;
    }) => void;
    changeLanguage: (state: import("immer/dist/internal").WritableDraft<Calendar>, action: {
        payload: any;
        type: string;
    }) => void;
    defineReturnDate: (state: import("immer/dist/internal").WritableDraft<Calendar>, action: {
        payload: any;
        type: string;
    }) => void;
    openCalendar: (state: import("immer/dist/internal").WritableDraft<Calendar>, action: {
        payload: any;
        type: string;
    }) => void;
    defineYearsInterval: (state: import("immer/dist/internal").WritableDraft<Calendar>, action: {
        payload: any;
        type: string;
    }) => void;
    changeReturnFormat: (state: import("immer/dist/internal").WritableDraft<Calendar>, action: {
        payload: any;
        type: string;
    }) => void;
}, "calendar">;
declare const _default: import("redux").Reducer<Calendar, import("redux").AnyAction>;
export default _default;
export declare const changeDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "calendar/changeDate">, changeLanguage: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "calendar/changeLanguage">, defineReturnDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "calendar/defineReturnDate">, openCalendar: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "calendar/openCalendar">, defineYearsInterval: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "calendar/defineYearsInterval">, changeReturnFormat: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "calendar/changeReturnFormat">;
