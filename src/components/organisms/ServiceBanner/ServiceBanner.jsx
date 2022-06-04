import React from "react"
import { getImage } from "gatsby-plugin-image"
import { VerticalCard } from "../Cards"
const ServiceBanner = ({ title, content, image, buttonUrl, buttonText }) => {
  console.log("image", image)
  return (
    <div id="left-service" className="mb-10 md:mb-0">
      <VerticalCard
        image={image}
        title={title}
        bodyText={content}
        linkText={buttonText}
        url={buttonUrl}
      />
    </div>
  )
}

ServiceBanner.defaultProps = {
  title: "",
  content: "",
  image: "",
  buttonUrl: "",
  buttonText: "",
}
export default ServiceBanner
