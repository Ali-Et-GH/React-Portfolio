import { FaAngleDown } from "react-icons/fa";
import { MdMenu, MdLogin, MdList, MdLogout } from "react-icons/md";
import styles from "@/styles/modules/nav_button.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/user";

export default function NavButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function toggleOpen() {
    setMenuOpen((s) => !s);
  }

  function handleLogout(){
    dispatch(logout());
  }

  return (
    <nav className={`${styles.nav_menu} ${!menuOpen && styles.collapsed}`}>
      <Link to={"/"}>
        <button className={`${styles.btn} ${!menuOpen && styles.collapsed}`}>
          <MdList />
        </button>
      </Link>
      {!user ? (
        <Link to={"/login"}>
          <button className={`${styles.btn} ${!menuOpen && styles.collapsed}`}>
            <MdLogin />
          </button>
        </Link>
      ) : (
        <button className={`${styles.btn} ${!menuOpen && styles.collapsed}`} onClick={handleLogout}>
          <MdLogout />
        </button>
      )}

      <button
        onClick={toggleOpen}
        className={`${styles.nav_button} ${styles.btn}`}
      >
        {menuOpen ? <FaAngleDown /> : <MdMenu />}
      </button>
    </nav>
  );
}
