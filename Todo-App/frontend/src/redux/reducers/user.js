import { createReducer } from "@reduxjs/toolkit";
import { loginSuccess, loginRequest, loginFail, logout } from "../actions/user";
import { loadAuthState } from "../../utils/storages/authStorage";

const storedUser = loadAuthState();

const initialState = {
  user: storedUser,
  loading: false,
  error: null,
};

export const auth = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => ({...state, loading: true, error: null}))
    .addCase(loginSuccess, (state, { payload }) => ({...state, user: payload, loading: false, error: null}))
    .addCase(loginFail, (state, { payload }) => ({...state, loading: false, error: payload}))
    .addCase(logout, () => ({user: null, loading: false, error: null}));
});
