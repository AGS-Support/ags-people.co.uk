import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TitleTag = styled.div``

const Title = ({ className, variant, children }) => {
  return (
    <TitleTag className={className} as={variant}>
      {children}
    </TitleTag>
  )
}

Title.defaultProps = {
  title: "please add a title",
  variant: "h1",
  className: "",
}

Title.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.string,
}

export default Title
