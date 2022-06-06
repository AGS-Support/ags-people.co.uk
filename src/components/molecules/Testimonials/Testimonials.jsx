import React from "react"
import parse from "html-react-parser"
import Masonry from "react-masonry-css"
import { StarIcon } from "@heroicons/react/solid"

import Title from "../../atoms/Title"

const Testimonials = ({ headline, testimonials }) => {
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {testimonials.map((testimonial, index) => {
          return (
            <div className="p-8 bg-white mb-26 shadow-md mb-6 mb-10 border border-[#f2f2f2]">
              <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
                <div className="text-lg font-bold text-black">
                  {testimonial.testimonials.title}
                </div>
                <div className="flex justify-end">
                  <StarIcon className="h-5 w-5 text-yellow" />
                  <StarIcon className="h-5 w-5 text-yellow" />
                  <StarIcon className="h-5 w-5 text-yellow" />
                  <StarIcon className="h-5 w-5 text-yellow" />
                  <StarIcon className="h-5 w-5 text-yellow" />
                </div>
              </div>
              <p className="text-para">
                {parse(testimonial.testimonials.content)}
              </p>
            </div>
          )
        })}
      </Masonry>
    </>
  )
}
export default Testimonials
