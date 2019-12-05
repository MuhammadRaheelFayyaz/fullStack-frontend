const jwt = require("jsonwebtoken");
export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case "verifyToken": {
      return state;
    }
    default:
      return state;
  }
};
