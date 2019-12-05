export const userReducer = (
  state = { name: "", user_id: "", session: false },
  action
) => {
  switch (action.type) {
    case "Register": {
      return state;
      break;
    }
    case "SignIn": {
      return state;
      break;
    }
    case "SetUser": {
      let { name, user_id } = action.payload;
      return { ...state, name, user_id, session: true };
      break;
    }
    case "NotUser": {
      const name = "",
        user_id = "",
        session = false;
      return { ...state, name, user_id, session };
      break;
    }
    default:
      return state;
  }
};
