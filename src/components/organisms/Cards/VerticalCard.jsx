import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Title from "../../atoms/Title"

const VerticalCard = ({ image, eyebrow, title, bodyText, linkText, url }) => {
  const cardImage = image?.node
    ? getImage(image?.node?.localFile)
    : getImage(image?.localFile)

  return (
    <Link to={url} itemProp="url">
      <div className="bg-tint pb-8">
        <div className="relative h-60 mb-6">
          {cardImage && (
            <GatsbyImage
              className="w-full h-full object-cover "
              image={cardImage}
              alt="Card Image"
            />
          )}
        </div>

        <div className="p-4">
          {eyebrow && (
            <span className="inline-block text-sm text-dark mb-3">
              {eyebrow}
            </span>
          )}
          <Title variant="h2" className="mb-2 text-2xl font-bold font-heading">
            <span itemProp="headline">{parse(title)}</span>
          </Title>
          <div itemProp="description" className="mb-4 text-lg text-dark">
            {parse(bodyText)}
          </div>
          <div className="mb-5 md:mb-0 font-bold">
            <span className="underline">{linkText}</span>
            {" →"}
          </div>
        </div>
      </div>
    </Link>
  )
}

VerticalCard.defaultProps = {
  image: "",
  eyebrow: "",
  title: "please add a title",
  bodyText: "",
  linkText: "Read More",
  url: "text-primary",
}

export default VerticalCard
