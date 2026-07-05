'use client'

import React, { useState } from "react";
import { FaRegSquare, FaRegCheckSquare } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/actions/user";
import LoadingCircle from "../components/animations/LoadingCircle";


export default function LoginForm({styles}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const {loading, error} = useSelector(state => state.auth);

  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e){
    e.preventDefault();

    dispatch(login({username, password, rememberMe}));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.login_form}>
      <input
        type="text"
        name="username" 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="text" 
        name="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="remember">Remember me {rememberMe ? <FaRegCheckSquare/> : <FaRegSquare/>}</label>
      <input type="checkbox" id="remember" hidden onChange={(e) => setRememberMe(e.target.checked)}/>
      {error ? <p className={styles.error}>{error}</p> : <></>}    
      <button type="submit">
        {loading ? <LoadingCircle/> : 'Login'}
      </button>
    </form>
  );
}
