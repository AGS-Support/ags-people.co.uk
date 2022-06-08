import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../../assets/images/logo.svg"

const Header = ({ siteTitle }) => {
  const menu = [
    { name: "Services", link: "/services" },
    { name: "Team", link: "/who-we-are" },
    { name: "Customer Stories", link: "/customer-stories" },
    { name: "FAQ", link: "/faq" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact-us" },
  ]
  return (
    <section
      className="mb-10 bg-[#f8f8f8]"
      style={{ borderBottom: "1px solid #f8f8f8 " }}
    >
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">
            <a href="/">
              <img alt="AGS Logo" src={logo} style={{ maxHeight: "30px" }} />
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
    </section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
