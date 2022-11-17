declare const styleYearSelect: {
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
        padding: number;
    };
    indicatorSeparator: (baseStyles: object) => {
        width: number;
        minWidth: number;
    };
    indicatorsContainer: (baseStyles: object) => {
        width: number;
        minWidth: number;
    };
};
export default styleYearSelect;
