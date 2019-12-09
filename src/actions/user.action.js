import API from "./api";
export const mapStateToProps = state => ({
  user: state.userReducer
});

export const mapDispatchToProps = dispatch => ({
  register: async user => {
    try {
      let res = await API.post(`/user/register`, user);
      if (res.data.status === "error") throw res.data.message;
      await localStorage.setItem("token", res.data.token);
      dispatch({ type: "SetUser", payload: res.data });
    } catch (error) {
      console.log("error :", error);
      dispatch({ type: "Register", payload: { token: null } });
      throw error;
    }
  },
  signIn: async user => {
    try {
      let res = await API.get(`/user/signin/${user.name}/${user.password}`);
      if (res.data.status === "error") throw res.data.message;
      await localStorage.setItem("token", res.data.token);
      dispatch({ type: "SetUser", payload: res.data });
    } catch (error) {
      console.log("error :", error);
      dispatch({ type: "SignIn", payload: { token: null } });
    }
  },
  setUser: async () => {
    try {
      let token = await localStorage.getItem("token");
      if (!token) throw "No token";
      let res = await API.get("/user/authenticate", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      if (res.data.status === "error") throw res.data.message;
      dispatch({ type: "SetUser", payload: res.data });
    } catch (error) {
      console.log("error :", error);
      dispatch({ type: "NotUser", payload: {} });
    }
  },
  signOut: async () => {
    console.log("Signout.......");
    await localStorage.removeItem("token");
    dispatch({ type: "NotUser", payload: {} });
  },
  getUsersList: async (key, token) => {
    try {
      const res = await API.get(`/user/get/${key}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      if (res.data.status === "error") throw res.data.message;
      dispatch({
        type: "userList",
        payload: res.data
      });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: "userList",
        payload: []
      });
      alert(error);
    }
  }
});
