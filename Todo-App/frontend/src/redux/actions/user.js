import { createAction } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFail = createAction("LOGIN_FAIL");
export const logout = createAction("LOGOUT");

export function Login({username, password}){
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      request.post("/login", {
      username,
      password
      }).then(({data}) => dispatch(loginSuccess(data)));

    } catch(error) {
      dispatch(loginFail(error.response?.data?.message || "Invalid username or password"))
    }
  }
}