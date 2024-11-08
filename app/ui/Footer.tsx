'use client'; // Use this in Next.js to make sure we can use React hooks

import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsBlockquoteRight } from 'react-icons/bs';

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is enabled from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    } else {
      // Use system preference as fallback
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Function to toggle dark mode and store the preference
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  // Apply the dark mode class to the document body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`w-full py-10 ${isDarkMode ? 'bg-gray-950' : 'bg-white'} text-white backdrop-blur-xl backdrop-opacity-20 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
        
        {/* Logo and Product Name */}
        <div className="flex items-center space-x-3">
          <BsBlockquoteRight className="text-fuchsia-500 text-3xl animate-pulse" />
          <div className="flex flex-col text-center md:text-left">
            <span className={`text-xl font-semibold ${isDarkMode ? 'text-fuchsia-500' : 'text-gray-900'}`}>Student Credential System</span>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} italic`}>"Empowering Data Security with Blockchain"</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://linkedin.com" aria-label="LinkedIn" className={`text-gray-400 hover:text-fuchsia-500 transition-transform transform hover:scale-110 ${isDarkMode ? 'dark:text-gray-300 dark:hover:text-fuchsia-500' : ''}`}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className={`text-gray-400 hover:text-fuchsia-500 transition-transform transform hover:scale-110 ${isDarkMode ? 'dark:text-gray-300 dark:hover:text-fuchsia-500' : ''}`}>
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com" aria-label="GitHub" className={`text-gray-400 hover:text-fuchsia-500 transition-transform transform hover:scale-110 ${isDarkMode ? 'dark:text-gray-300 dark:hover:text-fuchsia-500' : ''}`}>
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center md:text-left`}>
          © {new Date().getFullYear()} Student Credential System. All rights reserved.
        </p>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-xs text-gray-500 dark:text-gray-200 px-4 py-2 rounded border-2 border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
