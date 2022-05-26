import React from "react"
import parse from "html-react-parser"
import { StarIcon } from "@heroicons/react/solid"

const Testimonials = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((testimonial, index) => {
        return (
          <div className="p-8 bg-white mb-26 shadow-md mb-6 md:mb-0">
            <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
              <div className="text-lg font-bold text-black">
                {testimonial.title}
              </div>
              <div className="flex justify-end">
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
              </div>
            </div>
            <p className="text-para">{parse(testimonial.content)}</p>
          </div>
        )
      })}
    </>
  )
}
export default Testimonials
