'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeButton({styles}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  if (!mounted) {
    return (
      <div className={`${styles.theme} ${styles.icon}`}>
        <FaMoon />
      </div>
    );
  }

  return (
    <div className={`${styles.theme} ${styles.icon}`} onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </div>
  );
}