import React from "react"
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
              <Button variant="primary" to="/services">
                {button.text}
              </Button>
            </div>
          </div>
          <Video {...video} />
        </div>
      </div>
    </section>
  )
}

export default Banner
