export const loadAuthState = () => {
  try {
    const savedState = localStorage.getItem("auth");
    return savedState ? JSON.parse(savedState) : null;
  } catch {
    return null;
  }
};

export const saveAuthState = (state) => {
  try {
    const savingState = JSON.stringify(state);
    localStorage.setItem("auth", savingState);
  } catch {
    // console.log()
  }
};

export const clearAuthState = () => {
  localStorage.removeItem("auth");
};