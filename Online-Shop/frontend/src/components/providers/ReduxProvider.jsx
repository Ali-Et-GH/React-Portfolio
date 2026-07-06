'use client';

import { Provider } from 'react-redux';
import { useMemo } from 'react';
import { createStore } from '@/redux/store';

export default function ReduxProvider({ children, initialUser }) {
  const store = useMemo(
    () => createStore(initialUser),
    [initialUser]
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}