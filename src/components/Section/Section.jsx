import React from "react"
import PropTypes from "prop-types"

const Section = ({ children, background }) => {
  if (background === "dark") {
    background = "primary"
  }
  if (background === "light") {
    background = "tint"
  }
  var sectionClass = `bg-${background} angle-border angle-border-top angle-border-bottom angle-border-${background} py-0 md:py-10`
  if (background === "white") {
    sectionClass = `bg-${background}`
  }

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="content-xxx">{children}</div>
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
