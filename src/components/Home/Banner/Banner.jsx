import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Video from "./Video.jsx"
const Banner = ({ headline, subHeading, button, video }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="content">
          <div className="headline">
            <h1>{parse(headline)}</h1>
            <p className="bump">{parse(subHeading)}</p>
            <div className="mt-12">
              <Link
                to="#0"
                className="bg-primary  text-white font-bold p-4 rounded"
              >
                {button.text}
              </Link>
            </div>
          </div>
          <Video {...video} />
        </div>
      </div>
    </section>
  )
}
export default Banner
