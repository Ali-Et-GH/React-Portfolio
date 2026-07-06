import React from 'react';
import '@/styles/variables.css';
import '@/styles/general.css';

import { cookies } from 'next/headers';

import ReduxProvider from '../components/providers/ReduxProvider';
import ThemeProvider from '../components/providers/ThemeProvider';
import CartProvider from '../components/providers/CartProvider';
import LoginRedirect from '../components/navigation/LoginRedirect';

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();

  const userCookie = cookieStore.get('user');

  const initialUser = userCookie
    ? JSON.parse(userCookie.value)
    : null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="body">
        <ReduxProvider initialUser={initialUser}>
          <LoginRedirect/>
            <CartProvider>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </CartProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}