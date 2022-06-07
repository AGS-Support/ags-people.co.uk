import * as React from "react"
import PropTypes from "prop-types"

const Section = ({ children, background }) => {
  if (background === "dark") {
    background = "primary"
  }
  if (background === "light") {
    background = "tint"
  }

  return (
    <section
      className={`bg-${background} angle-border angle-border-top angle-border-bottom angle-border-${background} py-10`}
    >
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </section>
  )
}

Section.defaultProps = {
  background: "light",
}

Section.propTypes = {
  background: PropTypes.string,
}

export default Section
