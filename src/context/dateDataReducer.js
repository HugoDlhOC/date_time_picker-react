export const dateDataReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        date: action.date.date,
        yearMin: action.date.yearMin,
        yearMax: action.date.yearMax,
      };
    default:
      return state;
  }
};
