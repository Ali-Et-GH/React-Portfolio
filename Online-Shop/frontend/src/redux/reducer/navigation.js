import { createReducer } from "@reduxjs/toolkit";
import { disableLoginRedirect, enableLoginRedirect } from "../actions/navigation";

const initialValues = {
  enable: false,
  returnUrl: null
}

export const loginRedirect = createReducer(initialValues, builder => {
  builder
    .addCase(enableLoginRedirect, (state, {payload = null}) => ({enable: true, returnUrl: payload}))
    .addCase(disableLoginRedirect, (state) => false)
})