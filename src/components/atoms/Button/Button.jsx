import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = ({ children, to, variant, className, size, width }) => {
  const padding = {
    sm: "2",
    md: "4",
    lg: "6",
  }
  className += ` p-${padding[size]}`
  if (width === "grow") {
    className += ` button-full text-center w-[100%] md:w-[250px]  mb-5 md:mb-0`
  }
  switch (variant) {
    case "primary":
      className += " bg-primary border-primary text-white"
      break
    case "secondary":
      className += " bg-secondary border-secondary text-white"
      break
    case "primary-outline":
      className += " bg-white border-primary text-primary"
      break
    case "secondary-outline":
      className += " bg-white border-secondary text-primary"
      break
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
Button.defaultProps = {
  children: "",
  to: "",
  variant: "primary",
  width: "normal",
  size: "md",
  className: "font-bold rounded rounded-lg border-2",
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "primary-outline",
    "secondary-outline",
  ]),

  width: PropTypes.oneOf(["normal", "wide"]),
}
export default Button
