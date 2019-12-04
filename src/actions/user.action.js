import axios from "axios";
import API from "./api";
export const mapStateToProps = state => ({
  user: state.userReducer
});

export const mapDispatchToProps = dispatch => ({
  register: async user => {
    try {
      let res = await API.post(`/user/register`, {
        data: user
      });
      dispatch({ type: "Register", payload: { token: res.data.token } });
    } catch (error) {
      console.log("error :", error);
      dispatch({ type: "Register", payload: { token: null } });
    }
  }
});
