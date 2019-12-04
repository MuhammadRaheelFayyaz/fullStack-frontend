import React from "react";
import { createStore, combineReducers } from "redux";
import { userReducer } from "../reducers/user.reducer";

export const store = createStore(
  combineReducers({
    userReducer
  }),
  window.__REDUX_DEVTOLLS_EXTENSION__ && window.__REDUX_DEVTOLLS_EXTENSION__()
);
