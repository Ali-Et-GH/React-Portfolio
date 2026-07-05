'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import LoadingCircle from '../animations/LoadingCircle';
import useReturnUrlParam from '@/hooks/useReturnUrlParam';

export default function LoginRedirect() {
  const enable = useSelector(
    state => state.loginRedirect.enable
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const returnUrlParams = useReturnUrlParam();
  const url = `/login${returnUrlParams}`;

  useEffect(() => {
    if (!enable) return;

    const timeout = setTimeout(() => {
      router.push(url);
    }, 400);

    return () => clearTimeout(timeout);
  }, [enable, router, url, dispatch]);

  if (!enable) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg)',
        opacity: 0.8
      }}
    >
      <LoadingCircle
        size={'6rem'}
        thickness={'0.5rem'}
      />
    </div>
  );
}