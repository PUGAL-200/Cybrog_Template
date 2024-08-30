"use client"; // Add this line at the top

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between p-4 mx-16">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/logo.png" alt="Logo" className="w-auto h-8" />
        </Link>
        <div className="relative hidden md:block">
          <input
            className="rounded-3xl py-3 px-3 outline-none text-xs w-[200px] md:w-[250px] lg:w-[350px] pr-10 bg-gray-300 text-black"
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
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden md:hidden lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div
          className={`${isOpen ? 'block' : 'hidden'} absolute top-full right-0 mt-2 w-48 bg-gray-800 md:relative md:top-0 md:w-auto md:flex`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-900 rounded-lg md:flex-row items-center md:space-x-8 rtl:space-x-reverse text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/home/home"
                className="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white md:dark:text-pink-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/home/brower"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                href="/home/details"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                href="/home/stream"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Streams
              </Link>
            </li>
            <li>
              <div className="flex bg-gray-700 rounded-xl px-4 py-2 items-center">
                <Link
                  href="/home/profile"
                  className="block py-2 px-2 text-start gap-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Profile
                </Link>
                <Image
                  className="inline-block w-6 h-6 rounded-full ring-white ml-2"
                  src="/image/profile-header.jpg"
                  alt="Profile Image"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
