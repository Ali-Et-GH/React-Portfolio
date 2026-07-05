import reducer from '../reducer';
import { configureStore } from '@reduxjs/toolkit';

export function createStore(initialUser = null) {
  return configureStore({
    reducer,
    preloadedState: {
      auth: {
        user: initialUser,
        loading: false,
        error: null,
      },
    },
  });
}