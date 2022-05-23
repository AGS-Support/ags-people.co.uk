import React from "react"
import parse from "html-react-parser"

const Testimonials = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((testimonial, index) => {
        return (
          <div className="border-solid border-2 border-gray-300 p-8 bg-white mb-26 shadow-md">
            <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
              <div className="text-lg font-bold text-black">
                {testimonial.title}
              </div>
              <h5 className="text-brand text-xl text-right">⭐⭐⭐⭐⭐</h5>
            </div>
            <p className="text-para">{parse(testimonial.content)}</p>
          </div>
        )
      })}
    </>
  )
}
export default Testimonials
