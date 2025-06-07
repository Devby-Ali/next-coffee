'use client';

import { useEffect, useState } from 'react';
import Icon from '../Icon';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div onClick={toggleTheme} className="toggle-theme cursor-pointer">
      {darkMode ? (
        <Icon name="sun" className="hidden dark:inline-block w-8 h-8" />
      ) : (
        <Icon name="moon" className="inline-block dark:hidden w-8 h-8" />
      )}
    </div>
  );
}
