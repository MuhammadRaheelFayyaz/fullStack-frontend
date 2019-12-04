export const mapStateToProps = state => ({
  user: state.userReducer
});

export const mapDispatchToProps = dispatch => ({
  register: user => dispatch({ type: "Register", payload: { name: user.name } })
  //   stopAction: () => dispatch(stopAction)
});
