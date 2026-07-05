import Cookies from "js-cookie";

export function setUserCookies(user, rememberMe) {
  Cookies.set("user", JSON.stringify(user), 
    rememberMe ? { expires: 30 } : {});
}

export function getUserCookies() {
  const userCookie = Cookies.get("user");
  if (!userCookie) {
    return null;
  }
  try {
    return JSON.parse(userCookie);
  } catch (error) {
    console.error("Failed to parse user cookie:", error);
    Cookies.remove("user");
    return null;
  }
}

export function removeUserCookies() {
  Cookies.remove("user");
}