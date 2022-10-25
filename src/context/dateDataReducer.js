export const dateDataReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        day: action.date.day,
        month: action.date.month,
        year: action.date.year,
      };
    default:
      return state;
  }
};
