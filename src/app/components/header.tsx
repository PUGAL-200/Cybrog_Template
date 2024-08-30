"use client"; // Add this line at the top

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between p-4 md:mx-10 lg:">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/logo.png" alt="Logo" className="w-auto h-auto" />
        </Link>

        {/* Search Bar (Visible on md and larger screens) */}
        <div className="relative hidden lg:block">
          <input
            className="rounded-3xl py-3 px-3 outline-none text-xs w-[200px] md:w-[250px] lg:w-[200px] pr-10 bg-gray-300 text-black"
            placeholder="Type Something"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Hamburger Menu Button (Visible on sm and md screens) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-2 mt-2 w-full bg-gray-800 lg:relative lg:top-0 lg:w-auto lg:bg-transparent lg:flex lg:flex-row lg:space-x-8 z-20`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col lg:flex-row p-4 lg:p-0 border border-gray-900 rounded-lg lg:border-0 lg:bg-transparent lg:dark:bg-gray-900 text-white dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                href="/home/home"
                className="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-3 dark:text-white md:dark:text-pink-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/home/brower"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-3 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                href="/home/details"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-3 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                href="/home/stream"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-3 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Streams
              </Link>
            </li>
            <li>
              <div className="flex bg-gray-700 rounded-xl px-4 py-0 items-center">
                <div>
                <Link
                  href="/home/profile"
                  className="block py-2 px-2 text-start gap-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-3 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Profile
                </Link></div>
                <div>
                <img
                  className="inline-block w-6 h-6 rounded-full ring-white ml-2"
                  src="/image/profile-header.jpg"
                  alt="Profile Image"
                  // width={2}
                  // height={4}
                /></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
