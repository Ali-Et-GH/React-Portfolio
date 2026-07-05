'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaAngleLeft, FaShoppingBag } from 'react-icons/fa';
import styles from './login.module.css';
import LoginForm from '@/app/login/LoginForm';
import useReturnUrl from '@/hooks/useReturnUrl';
import { useDispatch, useSelector } from 'react-redux';
import { disableLoginRedirect } from '@/redux/actions/navigation';

export default function Login() {
  const router = useRouter();
  const returnUrl = useReturnUrl();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleReturn = () => {
    router.replace('/products');
  };

  useEffect(() => {
    dispatch(disableLoginRedirect());
    if(user && returnUrl) router.replace(returnUrl);
  }, [user, router, returnUrl]);


  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.login_container}>
        <div className={styles.header}>
          <button onClick={handleReturn} className={styles.back}>
            <FaAngleLeft />
          </button>
          <div className={styles.title}>
            <span className={styles.icon}><FaShoppingBag /></span>
            <h2>Logo</h2>
          </div>
        </div>
        <LoginForm  styles={styles}/>
      </div>
    </div>
  );
}