export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    calendar: {
        isOpen: boolean;
        date: string;
        language: string;
        returnDate: string;
        yearMin: number;
        yearMax: number;
        returnFormat: string;
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    calendar: {
        isOpen: boolean;
        date: string;
        language: string;
        returnDate: string;
        yearMin: number;
        yearMax: number;
        returnFormat: string;
    };
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
