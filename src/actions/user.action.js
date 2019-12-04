import API from "./api";
export const mapStateToProps = state => ({
  user: state.userReducer
});

export const mapDispatchToProps = dispatch => ({
  register: async user => {
    console.log("user :", user);
    try {
      let res = await API.post(`/user/register`, user);
      if (res.data.status === "error") throw res.data.message;
      dispatch({ type: "Register", payload: { token: res.data.token } });
    } catch (error) {
      console.log("error :", error);
      dispatch({ type: "Register", payload: { token: null } });
      throw error;
    }
  },
  signIn: async user => {
    try {
      let res = await API.get(`/user/signin`, user);
      dispatch({ type: "SignIn", payload: { token: res.data.token } });
    } catch (error) {
      console.log("error :", error.error);
      dispatch({ type: "SignIn", payload: { token: null } });
    }
  }
});
