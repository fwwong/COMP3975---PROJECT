import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faEarthAmericas, faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // !! converts a truthy or falsy value to boolean true or false
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <nav className="bg-gray-800 p-5">
      <div className="mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-lg font-semibold flex items-center">
            <img src="favicon.ico" alt="Logo" className="h-8 w-8 inline-block" />
            <h1 className="inline-block ml-2">Market Mingle</h1>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <FontAwesomeIcon icon={faLanguage} className='text-white hover:text-gray-300' />
            </li>
            <li>
              <FontAwesomeIcon icon={faEarthAmericas} className="text-white hover:text-gray-300" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleHalfStroke} className="text-white hover:text-gray-300" />
            </li>
            <li>
              {/* Conditional rendering based on isLoggedIn */}
              {isLoggedIn ? (
                <a href="/" onClick={() => { localStorage.removeItem('token'); setIsLoggedIn(false); }} className="text-white hover:text-gray-300">
                  <b>Logout</b>
                </a>
              ) : (
                <a href="/login" className="text-white hover:text-gray-300">
                  <b>Login</b>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
