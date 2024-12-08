import React from 'react';

const Nav = () => {
  return (
    <div className="flex flex-col">
      <header className="relative">
        {/* Add the grainy background */}
        <div className="absolute inset-0 z-0">
          <img
            src='/grainy.svg'
            alt="Grainy background"
            className="w-full h-full object-cover opacity-[.08]"
          />
        </div>
        <nav className="flex gap-4 justify-between m-4 relative z-20">
          {/* logo */}
          <div className="order-0 flex items-center gap-4">
            <a href="/" className="inline-block">
              <img
                src='/logo.png'
                alt="Clarity"
                loading="lazy"
                decoding="async"
                className="inline-block h-10 w-[40px]"
                width="340"
                height="80"
              />
            </a>
            <h3>Craftivert</h3>
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            htmlFor="nav-toggle"
            className="order-3 cursor-pointer flex items-center lg:hidden text-gray-900 lg:order-1"
          >
            <svg
              id="show-button"
              className="h-6 fill-current block"
              viewBox="0 0 20 20"
            >
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
            <svg
              id="hide-button"
              className="h-6 fill-current hidden"
              viewBox="0 0 20 20"
            >
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          {/* /navbar toggler */}
          <ul
            id="nav-menu"
            className="order-3 hidden min-w-[300px] pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8 max-lg:absolute max-lg:top-20 max-lg:right-0 rounded-lg border lg:border-none max-lg:bg-gray-100"
          >
            <li className="nav-item">
              <a href="/" className="block py-2 px-4 hover:text-gray-700 active:text-blue-600">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/features" className="block py-2 px-4 hover:text-gray-700">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="block py-2 px-4 hover:text-gray-700">
                Pricing
              </a>
            </li>
            <li className="group relative">
              <span
                className="inline-flex items-center cursor-pointer py-2 px-4 hover:text-gray-700"
                data-dropdown-toggle="dropdown-3"
              >
                Pages
                <svg
                  className="h-4 w-4 fill-current transition-transform duration-200 ease-in-out group-hover:rotate-180"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
              <ul
                id="dropdown-3"
                className="hidden absolute left-1/2 z-10 w-max -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-2 lg:mb-0 lg:transition-[opacity,transform] lg:duration-500 lg:fixed lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:scale-95 lg:group-hover:scale-100 lg:group-hover:grid lg:grid-cols-3 lg:gap-x-8"
              >
                <li className="nav-dropdown-item">
                  <a
                    href="/contact"
                    aria-label="Contact"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/about"
                    aria-label="About"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    About
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/integrations"
                    aria-label="Integrations"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Integrations
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/case-studies"
                    aria-label="Case Studies"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Case Studies
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/careers"
                    aria-label="Careers"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/changelog"
                    aria-label="Changelog"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Changelog
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/blog"
                    aria-label="Blog"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/faq"
                    aria-label="FAQ"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/privacy-policy"
                    aria-label="Privacy Policy"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/terms-conditions"
                    aria-label="Terms and Conditions"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/elements"
                    aria-label="Elements"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    Elements
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="/404"
                    aria-label="404 Page"
                    className="block py-2 px-4 hover:text-gray-700"
                  >
                    404 Page
                  </a>
                </li>
              </ul>
            </li>
            <a
              className="mt-4 lg:hidden bg-gray-900 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
              href="https://themefisher.com/products/clarity-astro"
            >
              Get Started
              <span className="ml-2">
                <span className="inline-block">
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    data-icon="arrowRight"
                    className="fill-current"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M9.7 5.749H.75" />
                      <path
                        d="m9.7 10.75 7.937-5.001L9.7.748z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                </span>
                
              </span>
            </a>
          </ul>
          <div
            className="order-1 ml-auto flex items-center md:order-2 lg:ml-0"
          >
            <a
              className="hidden lg:flex bg-gray-900 text-white font-bold py-2 px-4 rounded-3xl items-center"
              href="https://themefisher.com/products/clarity-astro"
            >
              Get Started
              <span className="ml-2">
                <span className="inline-block">
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    data-icon="arrowRight"
                    className="fill-current"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M9.7 5.749H.75" />
                      <path
                        d="m9.7 10.75 7.937-5.001L9.7.748z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                </span>
                
              </span>
            </a>
          </div>
        </nav>
      </header>
      {/* background image  */}
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