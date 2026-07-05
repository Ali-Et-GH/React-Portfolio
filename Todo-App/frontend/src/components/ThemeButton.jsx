import { useDispatch, useSelector } from 'react-redux'
import { FaRegMoon, FaRegSun} from 'react-icons/fa'
import styles from '../styles/modules/theme_button.module.css'
import { setTheme } from '../redux/actions/theme';
import { useLayoutEffect } from 'react';

export default function ThemeButton() {

  const theme = useSelector( state => state.theme )
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme(){
    dispatch(setTheme());
  }

  return (
    <button className={styles.theme_button} onClick={toggleTheme}>
      {theme == 'light' ? <FaRegMoon/> : <FaRegSun/>}
    </button>
  )
}
