export const dateDataReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        date: action.date.date,
      };
    default:
      return state;
  }
};
