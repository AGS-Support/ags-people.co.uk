import React from "react"
import { Link } from "gatsby"

const IrLink = ({ to, className, children }) => {
  if (to === "") return null
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
IrLink.defaultProps = {
  to: "",
  text: "add link text here",
  className: "text-primary font-bold uppercase underline",
}
export default IrLink
