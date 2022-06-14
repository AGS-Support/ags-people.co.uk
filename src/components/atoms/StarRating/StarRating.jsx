import React from "react"
import PropTypes from "prop-types"
import { StarIcon } from "@heroicons/react/solid"

const StarRating = ({ numStars, classsName }) => {
  if (numStars > 5) {
    numStars = 5
  }
  let stars = []
  for (var i = 0; i < numStars; i++) {
    stars.push(<StarIcon className={classsName} key={`star-rating-${i}`} />)
  }
  return stars
}

StarRating.defaultProps = {
  numStars: 5,
  classsName: "h-5 w-5 text-yellow",
}
StarRating.propTypes = {
  numStars: PropTypes.number,
  className: PropTypes.string,
}

export default StarRating
