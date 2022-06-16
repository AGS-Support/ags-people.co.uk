import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HorizontalCard = ({
  image,
  eyebrow,
  eyebrowLogo,
  title,
  bodyText,
  linkText,
  url,
}) => {
  const cardImage = image ? getImage(image) : null
  const eyebrowImage = eyebrowLogo ? getImage(eyebrowLogo) : null
  return (
    <Link to={url}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 p-4 shadow-md mb-8 bg-white">
        {cardImage && (
          <div>
            <GatsbyImage
              image={cardImage}
              objectFit="contain"
              alt="Service Image"
            />
          </div>
        )}
        <div className="pr-8">
          {eyebrowImage && (
            <div className="mt-10 md:mt-0 mb-5">
              <GatsbyImage
                image={eyebrowImage}
                objectFit="contain"
                alt="Service Image"
                style={{ width: "150px" }}
              />
            </div>
          )}

          <h2 className="margin-reset">{title}</h2>
          <span className="text-para">{parse(bodyText)}</span>
          <div className="font-bold mt-5">{linkText} →</div>
        </div>
      </div>
    </Link>
  )
}

HorizontalCard.defaultProps = {
  image: {},
  eyebrowLogo: {},
  eyebrow: "",
  title: "please add a title",
  bodyText: "",
  linkText: "Read More",
  url: "/",
}

export default HorizontalCard
