import { createAction } from "@reduxjs/toolkit";
import request from "@/utils/request";
import { removeUserCookies, setUserCookies } from "@/utils/authUtils";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFail = createAction("LOGIN_FAIL");
export const logoutAction = createAction("LOGOUT");

export const setCart = createAction("SET_CART");

export function login({ username, password, rememberMe }) {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const { data } = await request.post("/login", {username, password,});

      setUserCookies(data, rememberMe);
      dispatch(loginSuccess(data));

      await dispatch(loadCart(data.id));

    } catch (error) {
      dispatch(loginFail(error.response?.data?.message ||"Invalid username or password"));
    }
  };
}

export function logout() {
  return (dispatch) => {
    removeUserCookies();
    dispatch(logoutAction());
  };
}

export function loadCart(userId) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/cart", {userId});
      dispatch(setCart(data));
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  };
}

export function updateCart({userId, productId, quantity = 1, operation,}) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/update-cart", {
        userId,
        productId,
        quantity,
        operation,
      });

      dispatch(setCart(data));
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };
}