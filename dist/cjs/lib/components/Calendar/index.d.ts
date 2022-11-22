/// <reference types="react" />
interface CalendarDemoRequiredProps {
    languageChoice: string;
    yearMin: number;
    yearMax: number;
    returnFormat: string;
    defaultDate: Date;
    labelContent: string;
    nameInput: string;
}
interface CalendarDemoOptionalProps {
    classChange?: string;
    handleDateChanged?: (e: any) => string;
}
interface CalendarDemo extends CalendarDemoRequiredProps, CalendarDemoOptionalProps {
}
declare const Calendar: (props: CalendarDemo) => JSX.Element;
export default Calendar;
