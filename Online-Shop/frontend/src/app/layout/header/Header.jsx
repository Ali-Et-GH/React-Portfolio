import React from 'react'
import { cookies } from 'next/headers'
import { FaShoppingBag, FaSearch } from 'react-icons/fa'
import styles from './header.module.css'
import ThemeButton from './ThemeButton'
import CategoryNav from '@/app/layout/header/CategoryNav'
import LoginButton from './LoginButton'
import CartButton from './CartButton'

export default async function Header() {
  const cookieStore = await cookies()

  const userCookie = cookieStore.get('user');

  const user = userCookie
    ? JSON.parse(userCookie.value)
    : null


  return (
    <header className={styles.header}>
      <div className={styles.header_contents_container}>
        <div className={styles.logo_and_search}>
          <div className={styles.logo}>
            <span className={styles.icon}>
              <FaShoppingBag />
            </span>
            Logo
          </div>

          <div className={styles.search}>
            <span className={styles.icon}>
              <FaSearch />
            </span>

            <input
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>

        <div className={styles.login_and_cart}>
          <LoginButton styles={styles}/>

          <CartButton styles={styles}/>

          <ThemeButton styles={styles}/>
        </div>
      </div>

      <nav className={styles.nav}>
        <CategoryNav styles={styles}/>
      </nav>
    </header>
  )
}