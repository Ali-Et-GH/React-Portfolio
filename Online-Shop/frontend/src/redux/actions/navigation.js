import { createAction } from "@reduxjs/toolkit";

export const enableLoginRedirect = createAction("ENABLE_LOGIN_REDIRECT");
export const disableLoginRedirect = createAction("DISABLE_LOGIN_REDIRECT");