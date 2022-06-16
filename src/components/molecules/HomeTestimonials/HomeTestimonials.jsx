import React from "react"
import PropTypes from "prop-types"

import Title from "../../atoms/Title"

import { TestimonialCard } from "../../organisms/Cards"

const HomeTestimonials = ({ headline, testimonials, background }) => {
  return (
    <>
      {headline && (
        <Title variant="h2" className="text-center">
          {headline}
        </Title>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              headline={testimonial.testimonials.title}
              testimonial={testimonial.testimonials.content}
              numStars={5}
              background={background}
              key={`testimonial-${index}`}
            />
          )
        })}
      </div>
    </>
  )
}

HomeTestimonials.defaultProps = {
  headline: "",
  testimonials: [],
  background: "tint",
}

HomeTestimonials.propTypes = {
  headline: PropTypes.string,
  testimonials: PropTypes.array,
  background: PropTypes.oneOf(["", "white", "tint", "primary"]),
}

export default HomeTestimonials
