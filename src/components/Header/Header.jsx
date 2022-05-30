import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const menu = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Team", link: "/who-we-are" },
    { name: "Stories", link: "/customer-stories" },
    { name: "FAQ", link: "/faq" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact-us" },
  ]
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-logo">
          <a href="/">
            <span className="font-bold">AGS</span>
            <span className="font-normal">SUPPORT</span>
          </a>
        </div>

        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links bg-white md:bg-transparent">
          {menu.map((item, index) => {
            return (
              <Link key={`desktop-menu-item-${index}`} to={item.link}>
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
