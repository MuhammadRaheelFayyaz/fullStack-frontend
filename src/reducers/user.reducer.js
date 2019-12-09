export const userReducer = (
  state = { name: "", user_id: "", token: "", session: false, userList: [] },
  action
) => {
  switch (action.type) {
    case "Register": {
      return state;
    }
    case "SignIn": {
      return state;
    }
    case "SetUser": {
      let { name, user_id, token } = action.payload;
      return { ...state, name, token, user_id, session: true };
    }
    case "NotUser": {
      const name = "",
        user_id = "",
        session = false;
      return { ...state, name, user_id, session };
    }
    case "userList": {
      return { ...state, userList: action.payload };
    }
    default:
      return state;
  }
};
