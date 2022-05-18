import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const menu = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Testominials", link: "/testominials" },
    { name: "FAQ", link: "/faq" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ]
  return (
    <div className="container">
      <div class="navbar">
        <div class="nav-logo">
          <a href="#">AGS Support</a>
        </div>

        <input type="checkbox" id="nav-check" />
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
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
