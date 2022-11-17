const styleMonthSelect = {
  singleValue: (baseStyles: object) => ({
    ...baseStyles,
    fontSize: "13px",
  }),
  menuList: (baseStyles: object) => ({
    ...baseStyles,
    fontSize: "13px",
  }),
  control: (baseStyles: object) => ({
    ...baseStyles,
    height: 25,
    minHeight: 25,
    alignContent: "center",
  }),
  dropdownIndicator: (baseStyles: object) => ({
    ...baseStyles,
    width: 30,
    minWidth: 30,
    alignContent: "center",
  }),
  indicatorSeparator: (baseStyles: object) => ({
    ...baseStyles,
    width: 0,
    minWidth: 0,
  }),
};

export default styleMonthSelect;
