import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} A.A.Etesami. All rights reserved.</p>
    </footer>
  )
}
