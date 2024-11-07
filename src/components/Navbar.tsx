'use client';
import React, { useState } from "react";
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-sky-900 text-sky-200 h-20 px-6 sm:px-12 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            alt="logo"
            loading="lazy"
            width={90}
            height={113}
            decoding="async"
            className="w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
            style={{ color: "transparent" }}
            src="/images/logo.jpg"
          />
        </div>

        {/* Heading section for larger screens */}
        <div className="hidden sm:block flex-auto ml-10">
          <h1 className="text-xl font-semibold text-sky-100">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>

        {/* Mobile Heading */}
        <div className="sm:hidden">
          <h1 className="text-lg font-semibold">Tuition Free Program</h1>
        </div>

        {/* Mobile menu button (hamburger) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navbar Links and Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:space-x-10 justify-end items-center sm:w-auto bg-sky-900`}
        >
          <ul className="flex flex-col sm:flex-row pt-4 sm:pt-0 space-y-2 sm:space-y-0 sm:space-x-10 text-white text-center w-full sm:w-auto">
            <li>
              <Link href="/" className="transition duration-300 ease-in-out">Home</Link>
            </li>
            <li>
              <Link href="/apply" className="transition duration-300 ease-in-out">Apply</Link>
            </li>
            <li>
              <Link href="/jobs" className="transition duration-300 ease-in-out">Jobs</Link>
            </li>
            <li>
              <Link href="/result-checker" className="transition duration-300 ease-in-out">Result</Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="cursor-pointer flex items-center text-white font-bold"
              >
                Courses
                <svg
                  className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.64l3.71-3.45a.75.75 0 111.04 1.08l-4 3.75a.75.75 0 01-1.04 0l-4-3.75a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 sm:left-auto bg-white text-black p-4 rounded shadow-lg mt-1 w-full sm:w-72">
                  <div>
                    <h3 className="font-bold">Core Courses</h3>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>
                        <Link href="#">Programming Fundamentals</Link>
                      </li>
                      <li>
                        <Link href="#">Web2 Using NextJS</Link>
                      </li>
                      <li>
                        <Link href="#">Earn as You Learn</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold">Advanced Courses</h3>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>
                        <Link href="#">Web 3 and Metaverse</Link>
                      </li>
                      <li>
                        <Link href="#">Cloud-Native Computing</Link>
                      </li>
                      <li>
                        <Link href="#">AI and Deep Learning</Link>
                      </li>
                      <li>
                        <Link href="#">Ambient Computing and IoT</Link>
                      </li>
                      <li>
                        <Link href="#">Bioinformatics</Link>
                      </li>
                      <li>
                        <Link href="#">Network Automation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

