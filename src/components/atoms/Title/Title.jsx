import React from "react"
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
  className: "text-primary",
}
export default Title
