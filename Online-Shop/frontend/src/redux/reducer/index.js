import { combineReducers } from "@reduxjs/toolkit";
import { auth } from "./user";
import { loginRedirect } from "./navigation";

export default combineReducers({
  auth,
  loginRedirect
})