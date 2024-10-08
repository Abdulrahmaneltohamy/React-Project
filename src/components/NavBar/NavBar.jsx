import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavExpansion = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="bg-[#2C3E50] p-4 text-white border-gray-200 fixed left-0 right-0 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to={''} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-bold whitespace-nowrap ">START FRAMEWORK</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-8 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavExpanded}
          onClick={toggleNavExpansion}
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
        <div className={`w-full md:block md:w-auto ${isNavExpanded ? '' : 'hidden'}`} id="navbar-default">
          <ul className=" flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <NavLink to={'about'} className="block py-2 px-3 font-bold" aria-current="page">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to={'portfolio'} className="block py-2 px-3 font-bold">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to={'contact'} className="block py-2 px-3 font-bold">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;