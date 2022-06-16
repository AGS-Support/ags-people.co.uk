import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"

import Title from "../../atoms/Title"

const PageHeading = ({ title, intro, className }) => {
  return (
    <section className={className}>
      <div className="inner-container">
        <div className="pt-10 md:pt-4">
          <Title variant="h1">{title}</Title>
          {intro && <span className="text-para">{parse(intro)}</span>}
        </div>
      </div>
    </section>
  )
}

PageHeading.defaultProps = {
  title: "please add a title",
  intro: "",
  className: "text-center",
}

PageHeading.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  className: PropTypes.string,
}

export default PageHeading
