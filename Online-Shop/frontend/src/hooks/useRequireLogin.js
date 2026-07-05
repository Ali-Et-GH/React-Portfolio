'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enableLoginRedirect } from '@/redux/actions/navigation';

export default function useRequireLogin() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(enableLoginRedirect());
    }
  }, [user, dispatch]);

  return user;
}