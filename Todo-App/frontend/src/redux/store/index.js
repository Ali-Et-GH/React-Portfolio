import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import { clearAuthState, saveAuthState } from '../../utils/storages/authStorage';
import { saveThemeState } from '../../utils/storages/themeStorage';

const store = configureStore({
  reducer,
})

let previousUser = store.getState().auth.user;
let previousTheme = store.getState().theme;
store.subscribe(() => {
  const currentUser = store.getState().auth.user;

  if (currentUser !== previousUser) {
    if (currentUser) {
      saveAuthState(currentUser);
    } else {
      clearAuthState();
    }

    previousUser = currentUser;
  }

  const currentTheme = store.getState().theme;
  
  if(currentTheme !== previousTheme){
    if(currentTheme){
      saveThemeState(currentTheme)
    }

    previousTheme = currentTheme;
  }
});

export default store;