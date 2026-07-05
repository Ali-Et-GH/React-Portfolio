import { createReducer } from "@reduxjs/toolkit";
import { loginSuccess, loginRequest, loginFail, logout, logoutAction, setCart } from "../actions/user";

const initialValues = {
  user: null,
  loading: false,
  error: null,
}

export const auth = createReducer(initialValues, (builder) => {
  builder
    .addCase(loginRequest, (state) => ({...state, loading: true, error: null}))
    .addCase(loginSuccess, (state, {payload}) => ({user: {...payload, cart:[]}, loading: false, error: null}))
    .addCase(loginFail, (state, {payload}) => ({...state, error: payload, loading: false}))
    .addCase(logoutAction, () => ({user: null, loading: false, error: null}))
    .addCase(setCart, (state, {payload}) => ({...state, user: {...state.user, cart: payload}}))
})