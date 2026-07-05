import { combineReducers } from "@reduxjs/toolkit";
import { theme } from "./theme";
import { todos } from "./todos";
import { auth } from "./user";

export default combineReducers({
  theme,
  todos,
  auth,
});