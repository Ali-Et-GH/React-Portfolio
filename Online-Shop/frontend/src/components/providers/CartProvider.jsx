'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '@/redux/actions/user';

export default function CartProvider({ children }) {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);
  const userId = user?.id;

  useEffect(() => {
    if (user) {
      dispatch(loadCart(user.id));
    }
  }, [userId]);

  return children;
}