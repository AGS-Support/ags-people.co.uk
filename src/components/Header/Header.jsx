import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../../assets/images/logo-new-trans.png"

import { useMenuHeader } from "../../hooks/use-menu-header"

const Header = ({ siteTitle }) => {
  let menu = useMenuHeader()
  if (!menu) {
    menu = [
      { label: "Our sectors", uri: "/our-sectors" },
      { label: "Team", uri: "/who-we-are" },
      { label: "Customer Stories", uri: "/customer-stories" },
      { label: "FAQ", uri: "/faq" },
      { label: "Testimonials", uri: "/testimonials" },
      { label: "Blog", uri: "/blog" },
      { label: "Contact", uri: "/contact-us" },
    ]
  }

  return (
    <section
      className="md:mb-10 bg-header"
      style={{ borderBottom: "1px solid #f8f8f8 " }}
    >
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">
            <a href="/">
              <img alt="AGS Logo" src={logo} className="max-h-[40px]" />
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

          <div className="bg-white nav-links md:bg-transparent">
            {menu.map((item, index) => {
              return (
                <Link
                  key={`desktop-menu-item-${index}`}
                  to={item.uri}
                  activeClassName="active"
                >
                  {item.label}
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
  siteTitle: "",
}

export default Header
