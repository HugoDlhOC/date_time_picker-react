/// <reference types="react" />
interface CalendarDemoRequiredProps {
    languageChoice: string;
    yearMin: number;
    yearMax: number;
    returnFormat: string;
    defaultDate: Date;
    labelContent: string;
}
interface CalendarDemoOptionalProps {
    classToggle?: string;
}
interface CalendarDemo extends CalendarDemoRequiredProps, CalendarDemoOptionalProps {
}
declare const Calendar: (props: CalendarDemo) => JSX.Element;
export default Calendar;
