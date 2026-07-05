export const loadThemeState = () => {
  try {
    const savedState = localStorage.getItem("theme");
    return savedState ? savedState : 'light';
  } catch {
    return 'light';
  }
};

export const saveThemeState = (state) => {
  try {
    localStorage.setItem("theme", state);
  } catch {
    // console.log()
  }
};