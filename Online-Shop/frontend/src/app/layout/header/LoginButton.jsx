'use client'

import Link from "next/link";
import React from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useReturnUrlParam from "@/hooks/useReturnUrlParam";
import { logout } from "@/redux/actions/user";

export default function LoginButton({styles}) {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const returnUrlParam = useReturnUrlParam();

  function handleLogout(e){
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <div className={styles.login}>
      {!user ? (
        <Link href={`/login${returnUrlParam}`}>
          Login
          <MdLogin />
        </Link>
      ) : (
        <button onClick={handleLogout} className={styles.logout}>
          Logout
          <MdLogout />
        </button>
      )}
    </div>
  );
}
