import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  const handleAddCourse = () => {
    navigate('/add-course'); // Navigate to the Add Course form
  };

  return (
    <header className="bg-secondary-3 text-white">
      <div className="container max-w-screen-xl px-4 md:px-6 mx-auto flex justify-between py-4">
        <div className="flex items-center gap-x-10 z-20">
          <div id="logo" className="text-3xl bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
            CRAFTY
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-x-8">
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="https://www.ycombinator.com/launches/Gh3-codecrafters-advanced-code-challenges-for-senior-engineers">About</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">Perks</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">Pricing</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/expense">Expense</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/categories">Categories</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/Cart">Cart</a>
              <button
                onClick={handleAddCourse}
                className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <button
            onClick={toggleUserMenu}
            className="w-10 h-10 bg-theme-neutral-800 hover:bg-theme-neutral-700 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zm-9.75 9a9 9 0 0118 0v.75A2.25 2.25 0 0121 21H3a2.25 2.25 0 01-2.25-2.25v-.75z"
              />
            </svg>
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
              <div className="py-2 px-4">User Name</div>
              <div className="py-2 px-4">user@example.com</div>
              <div className="border-t border-gray-200"></div>
              <a href="/profile" className="block py-2 px-4 hover:bg-gray-100">Profile</a>
              <a href="/" className="block py-2 px-4 hover:bg-gray-100">Log out</a>
            </div>
          )}
        </div>
        <div className="block md:hidden flex items-center z-20" onClick={toggleMenu}>
          <div role="button" className="w-14 h-14 bg-neutral-800 rounded-full flex items-center p-3 hover:bg-neutral-700">
            <div className="space-y-1.5 w-full">
              <div className="h-px bg-white"></div>
              <div className="h-px bg-white"></div>
              <div className="h-px bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col justify-start items-start h-full z-10 md:hidden">
          <div className="flex flex-col items-center gap-8 ml-4 py-4">
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="https://www.ycombinator.com/launches/Gh3-codecrafters-advanced-code-challenges-for-senior-engineers">About</a>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">Perks</a>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">Pricing</a>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/expense">Expense</a>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/categories">Categories</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingNav;
