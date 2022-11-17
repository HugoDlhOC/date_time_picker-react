const styleYearSelect = {
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
    padding: 0,
  }),
  indicatorSeparator: (baseStyles: object) => ({
    ...baseStyles,
    width: 0,
    minWidth: 0,
  }),
  indicatorsContainer: (baseStyles: object) => ({
    ...baseStyles,
    width: 20,
    minWidth: 20,
  }),
};

export default styleYearSelect;
