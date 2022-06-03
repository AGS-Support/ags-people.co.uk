import React from "react"
import parse from "html-react-parser"
import Title from "../../atoms/Title"
const PageHeading = ({ title, intro, className }) => {
  return (
    <section className={className}>
      <div className="inner-container">
        <Title variant="h1">{title}</Title>
        {intro && <p className="text-para">{parse(intro)}</p>}
      </div>
    </section>
  )
}

PageHeading.defaultProps = {
  title: "please add a title",
  intro: "",
  className: "text-center",
}

export default PageHeading
