import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const menu = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Testominials", link: "/testominials" },
    { name: "FAQ", link: "/faq" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ]
  return (
    <>
      <div className="border-t-8 border-secondary relative">
        <div
          className="bg-secondary rounded-bl-lg rounded-br-lg text-white text-center absolute right-0"
          style={{ width: "350px", height: "35px", margin: "0px 50px 0px 0px" }}
        >
          Call now: 020 1234 7389
        </div>
      </div>
      <nav className="py-8 bg-white">
        <div className="px-4 mx-auto">
          <div className="flex justify-between items-center">
            <a className="text-primary text-2xl leading-none" href="#">
              <img
                className="h-8"
                src="AGS-Support-Logo-Web.png"
                alt=""
                width="auto"
              />
              AGS SUPPORT
            </a>
            <div className="lg:hidden">
              <button className="block navbar-burger text-indigo-50 hover:text-indigo-200 focus:outline-none">
                <svg
                  className="h-4 w-4"
                  fill="currentColor "
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
              {menu.map((item, index) => {
                return (
                  <li key={`desktop-menu-item-${index}`}>
                    <Link
                      to={item.link}
                      className="text-lg text-primary hover:text-primary/80 font-mediumm"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <a
              className="hidden lg:block px-5 py-3 text-sm text-center font-semibold text-white hover:text-indigo-500 hover:bg-white border border-white rounded transition duration-200"
              href="#"
            >
              Free Consultation
            </a>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-12">
              <a
                className="mr-auto text-2xl font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-8"
                  src="plain-assets/logos/plain-indigo.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 cursor-pointer hover:text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {menu.map((item, index) => {
                  return (
                    <li key={`mobile-menu-item-${index}`} className="mb-1">
                      <Link
                        to={item.link}
                        className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-5 py-3 mb-3 text-sm text-center bg-white hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                  href="#"
                >
                  Free Consultation
                </a>
                <a
                  className="block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-white border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                  href="#"
                >
                  Sign up
                </a>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2022 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
