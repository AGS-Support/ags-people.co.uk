import React from "react"
import PropTypes from "prop-types"

const Section = ({ children, background }) => {
  console.log("background", background)
  let sectionClass = ""
  if (background === "dark") {
    sectionClass =
      "bg-primary angle-border angle-border-top angle-border-bottom angle-border-primary py-0 md:py-10"
  }
  if (background === "light" || background === "tint") {
    sectionClass =
      "bg-tint angle-border angle-border-top angle-border-bottom angle-border-tint py-0 md:py-10"
  }

  if (background === "white") {
    sectionClass = `bg-white`
  }

  return (
    <section className={sectionClass}>
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
