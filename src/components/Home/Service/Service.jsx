import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Service = ({ title, content, image, buttonUrl, buttonText }) => {
  const serviceImage = getImage(image?.localFile)

  return (
    <div id="left-service" className="mb-10 md:mb-0">
      <GatsbyImage image={serviceImage} alt="Service Image" />

      <h2 className="margin-reset" style={{ marginTop: "2.2rem" }}>
        {title}
      </h2>
      <p className="mt-8 text-dark">{parse(content)}</p>
      <div className="py-3">
        <Link
          to={buttonUrl}
          className="text-brand bg-tint hover:bg-tint/80 text-white font-bold py-4 px-4 rounded"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  )
}
export default Service
