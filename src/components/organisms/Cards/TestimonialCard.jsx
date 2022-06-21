import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"

import StarRating from "../../atoms/StarRating"

const TestimonialCard = ({
  headline,
  subTitle,
  testimonial,
  numStars,
  background,
}) => {
  if (numStars < 1 || numStars > 5) {
    numStars = 0
  }
  return (
    <div
      className={`p-8 bg-${background} shadow-md  mb-10 border border-[#f2f2f2]`}
    >
      <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-2">
        <div className="text-lg font-bold text-black">{headline}</div>

        <div className="flex justify-end">
          <StarRating numStars={numStars} />
        </div>
      </div>
      <h5 className="mb-10">
        <cite>{subTitle}</cite>
      </h5>
      <span className="text-para">{parse(testimonial)}</span>
    </div>
  )
}

TestimonialCard.defaultProps = {
  headline: "",
  testimonial: "",
  numStars: 5,
  background: "tint",
}

TestimonialCard.propTypes = {
  headline: PropTypes.string,
  testimonial: PropTypes.string,
  numStars: PropTypes.oneOf([1, 2, 3, 4, 5]),
  background: PropTypes.oneOf(["", "white", "tint", "primary"]),
}

export default TestimonialCard
