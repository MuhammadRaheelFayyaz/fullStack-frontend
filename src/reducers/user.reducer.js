export const userReducer = (state = [], action) => {
  switch (action.type) {
    case "Register":
      return [...state, action.payload];
    default:
      return state;
  }
};
