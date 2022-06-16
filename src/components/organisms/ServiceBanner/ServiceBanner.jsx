import React from "react"

import { VerticalCard } from "../Cards"

const ServiceBanner = ({ title, content, image, buttonUrl, buttonText }) => {
  return (
    <div className="mb-10 md:mb-0 md:px-4">
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
