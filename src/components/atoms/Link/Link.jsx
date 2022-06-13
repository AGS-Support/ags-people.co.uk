import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Button from "../Button"

const IrLink = ({ to, type, className, children }) => {
  if (type !== "calendly" && to === "") return null
  switch (type) {
    case "internal":
      return (
        <>
          <Link to={to} className={className}>
            {children}
          </Link>
          <Link to={to} className={`${className} no-underline`}>
            {" "}
            →
          </Link>
        </>
      )
      break
    case "external":
      return (
        <a href={to} className={className}>
          {children}
        </a>
      )
      break
    case "calendly":
      return (
        <Button variant="secondary" to={`${process.env.GATSBY_CALENDLY_URL}`}>
          {children}
        </Button>
      )
      break
  }
}

IrLink.defaultProps = {
  type: "internal",
  to: "",
  text: "add link text here",
  className: "text-primary font-bold uppercase underline",
}

IrLink.propTypes = {
  type: PropTypes.oneOf(["internal", "external", "calendly"]),
}
export default IrLink
