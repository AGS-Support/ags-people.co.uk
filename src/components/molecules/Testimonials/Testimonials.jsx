import React from "react"
import PropTypes from "prop-types"
import Masonry from "react-masonry-css"

import Section from "../../Section"

import Title from "../../atoms/Title"

import { TestimonialCard } from "../../organisms/Cards"

const Testimonials = ({ headline, testimonials, background }) => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    720: 1,
  }

  return (
    <>
      {headline && (
        <Title variant="h2" className="text-center">
          {headline}
        </Title>
      )}
      <Section background="white">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonialCard
                headline={testimonial.testimonials.title}
                subTitle={testimonial.testimonials.subTitle}
                testimonial={testimonial.testimonials.content}
                numStars={5}
                background={background}
                key={`testimonial-${index}`}
              />
            )
          })}
        </Masonry>
      </Section>
    </>
  )
}

Testimonials.defaultProps = {
  headline: "",
  testimonials: [],
  background: "",
}

Testimonials.propTypes = {
  headline: PropTypes.string,
  testimonials: PropTypes.array,
  background: PropTypes.oneOf(["", "white", "tint", "primary"]),
}

export default Testimonials
