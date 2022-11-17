declare const styleMonthSelect: {
    singleValue: (baseStyles: object) => {
        fontSize: string;
    };
    menuList: (baseStyles: object) => {
        fontSize: string;
    };
    control: (baseStyles: object) => {
        height: number;
        minHeight: number;
        alignContent: string;
    };
    dropdownIndicator: (baseStyles: object) => {
        width: number;
        minWidth: number;
        alignContent: string;
    };
    indicatorSeparator: (baseStyles: object) => {
        width: number;
        minWidth: number;
    };
};
export default styleMonthSelect;
