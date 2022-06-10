import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Title from "../../atoms/Title"

const CustomerLogos = ({ headline, logos }) => {
  return (
    <>
      <Title className="text-center" variant="h2">
        {headline}
      </Title>
      <div className="grid grid-cols-3 md:grid-cols-6  gap-8 brands mb-10 ">
        {logos.map((logo, index) => {
          var logoImage = getImage(logo.localFile)
          return (
            <div
              className={`brands__item ${
                index > 8 ? "hidden md:inline" : "visible"
              }`}
              key={`customerlogo-${index}`}
            >
              <span>
                <GatsbyImage image={logoImage} alt="Customer Logo" />
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

CustomerLogos.defaultProps = {
  headline: "",
  logos: [],
}

CustomerLogos.propTypes = {
  headline: PropTypes.string,
  logosList: PropTypes.array,
}

export default CustomerLogos
