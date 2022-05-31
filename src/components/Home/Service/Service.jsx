import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Service = ({ title, content, image, buttonUrl, buttonText }) => {
  const serviceImage = getImage(image?.localFile)

  return (
    <div id="left-service" className="mb-10 md:mb-0">
      <GatsbyImage image={serviceImage} alt="Service Image" />

      <h2 className="mt-3 mb-0">{title}</h2>
      <p className="mt-2 text-dark">{parse(content)}</p>
      <div>
        <Link
          to={buttonUrl}
          className="text-primary font-bold uppercase underline"
        >
          {buttonText} →
        </Link>
      </div>
    </div>
  )
}
export default Service
