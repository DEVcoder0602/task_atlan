"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md flex justify-between items-center px-4 py-2 md:px-8">
      <Link href="/" className="text-xl font-bold text-gray-800 mr-10">
        LLM world
      </Link>
      <button
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-100 p-2 rounded-md"
        onClick={toggleNav}
      >
        {isNavOpen ? (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16v12H4zM4 14a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <div
        className={`md:flex md:flex-grow md:items-center ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex md:flex-row md:space-x-8 md:text-base font-medium list-none mt-4 md:mt-0">
          <li>
            <Link href="/about" className="text-gray-700 hover:text-indigo-500">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-700 hover:text-indigo-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/allmodels"
              className="text-gray-700 hover:text-indigo-500"
            >
              Explore Models
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
