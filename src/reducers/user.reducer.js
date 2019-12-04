const jwt = require("jsonwebtoken");
export const userReducer = async (state = { name: "", id: "" }, action) => {
  switch (action.type) {
    case "Register": {
      let { token } = action.payload;
      if (!token) return state;
      await localStorage.setItem("token", token);
      let decode = jwt.decode(token);
      let user = { user_id: decode.user_id };
      return { ...state, user };
    }
    default:
      return state;
  }
};
