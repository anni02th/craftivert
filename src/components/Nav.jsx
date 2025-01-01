import React, { useState, useEffect } from 'react';
import ButtonToStart from './Hero/Button';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      // Automatically close the menu on larger screens if it's open
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        {/* Add the grainy background */}
        <div
          className={`absolute inset-0 z-0 ${
            isScrolled ? 'bg-white' : 'bg-transparent'
          }`}
        >
          <img
            src="/grainy.svg"
            alt="Grainy background"
            className="w-full h-full object-cover opacity-[.08]"
          />
        </div>
        <nav className="container mx-auto flex gap-4 justify-evenly m-4 relative z-20">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <a href="/" className="inline-block">
              <img
                src="/logo1.png"
                alt="Clarity"
                loading="lazy"
                decoding="async"
                className="inline-block h-10 w-auto"
                width="auto"
                height="80"
              />
            </a>
            <span className="cursor"></span> {/* Added cursor here */}
          </div>

          {/* Navbar Toggler */}
          <input
            id="nav-toggle"
            type="checkbox"
            className="hidden"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label
            htmlFor="nav-toggle"
            className="cursor-pointer flex items-center lg:hidden text-gray-900"
          >
            <svg
              id="show-button"
              className={`h-6 fill-current ${isMenuOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 20 20"
            >
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
            <svg
              id="hide-button"
              className={`h-6 fill-current ${isMenuOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 20 20"
            >
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>

          {/* Navigation Links & Button (inside menu for mobile) */}
          <ul
            id="nav-menu"
            className={`lg:flex lg:w-auto lg:space-x-2 xl:space-x-8 max-lg:absolute max-lg:top-20 max-lg:right-0 rounded-lg border lg:border-none max-lg:bg-gray-100 max-lg:min-w-[300px] pb-6 lg:pb-0 lg:items-center transition-all duration-300 ${
              isScrolled
                ? 'bg-white shadow-md'
                : ''
            } ${isMenuOpen ? 'block bg-white' : 'hidden'}`}
          >
            <li className="nav-item">
              <a
                href="/"
                className="block py-2 px-4 hover:text-gray-700 active:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#feature"
                className="block py-2 px-4 hover:text-gray-700 transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#blogs"
                className="block py-2 px-4 hover:text-gray-700 transition-colors duration-300"
              >
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="block py-2 px-4 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            {/* Button inside the mobile menu */}
            <li className="nav-item lg:hidden">
              <ButtonToStart />
            </li>
          </ul>

          {/* Button to Start (only visible on larger screens) */}
          {!isMenuOpen && (
            <div className="hidden lg:flex items-center">
              <ButtonToStart />
            </div>
          )}
        </nav>
      </header>

      {/* Background Image */}
      <div
        className="absolute top-80 sm:top-44 right-1/2 translate-x-1/2 z-10 rotate-6"
        aria-hidden="true"
      >
        <img
          src="../hero_background.oX70tfDl_VRqHP.svg"
          alt="banner.background_image"
          loading="eager"
          decoding="async"
          className="mx-auto max-w-full w-full h-auto"
          width="1200"
          height="1000"
        />
      </div>
    </div>
  );
};

export default Nav;