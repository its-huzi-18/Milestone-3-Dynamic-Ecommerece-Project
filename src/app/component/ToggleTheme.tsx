'use client';
import { useState, useEffect } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light'); // default theme

  useEffect(() => {
    // Only run this effect on the client
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme); // Set the theme from localStorage if it exists
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  useEffect(() => {
    // Apply the theme change to the document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]); // Run this effect whenever the theme changes

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="border-[1px] rounded-[4px] px-2 h-8 md:h-10 text-[22px] md:text-[24px] bg-gray-200 dark:bg-gray-800 "
    >
      {theme === 'light' ? <IoMoonOutline /> : <MdOutlineWbSunny /> }
    </button>
  );
}
