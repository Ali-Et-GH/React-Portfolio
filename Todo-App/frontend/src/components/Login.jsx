import styles from '@/styles/modules/login.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Login } from '../redux/actions/user';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(Login({username, password}))
  }

  if(user) return <Navigate to={'/'}/>

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <h2 className={styles.page_title}>Login</h2>
        <div className={styles.input_container}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit"> Login </button>
      </form>
    </div>
  );
}