import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import Video from "../../atoms/Video"
import Button from "../../atoms/Button"

const Banner = ({ headline, subHeading, button, video }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="content">
          <div className="headline">
            <h1>{parse(headline)}</h1>
            <p className="bump">{parse(subHeading)}</p>
            <div className="mt-12 mb-6">
              <Link
                to={button.url || "/services"}
                className="font-bold rounded rounded-lg border-2   text-[1.1rem] text-center w-[100%]   mb-5 md:mb-0 bg-secondary border-secondary text-white block quickLinks:inline quickLinks:w-auto p-4"
              >
                {button.text}
              </Link>
            </div>
          </div>
          <Video {...video} showPoster={false} />
        </div>
      </div>
    </section>
  )
}

export default Banner
