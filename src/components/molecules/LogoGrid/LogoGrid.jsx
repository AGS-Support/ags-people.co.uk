import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useOptionsLogos } from "../../../hooks/use-options-logos"

const LogoGrid = ({ columns, mobileColumns }) => {
  const logos = useOptionsLogos()
  return (
    <div
      className={`grid grid-cols-${mobileColumns} md:grid-cols-${columns}  gap-8 brands mb-10 `}
    >
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
  )
}

LogoGrid.defaultProps = {
  columns: 6,
  mobileColumns: 3,
}

LogoGrid.propTypes = {
  columns: PropTypes.number,
  mobileColumns: PropTypes.number,
}

export default LogoGrid
