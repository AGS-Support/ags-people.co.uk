import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import LazyLoad from "react-lazyload"
import FsLightbox from "fslightbox-react"

import playIcon from "../../../assets/images/play-white.jpeg"

const Video = ({ vimeoUrl, poster, showPoster }) => {
  console.log(poster)
  const [toggler, setToggler] = useState(false)
  if (!vimeoUrl || !poster) {
    return <></>
  }
  const videoPoster = getImage(poster?.localFile)

  const videoProps = {
    fullScreen: true,
    controls: true,
    playsInline: true,
    preload: "metadata",
    width: "100vw",
    height: "100%",
    autoPlay: true,
    src: vimeoUrl + "#t=0.001",
    className: "min-w-[100vw] md:min-w-[75vw]",
  }

  const embedVideoProps = {
    fullScreen: true,
    controls: true,
    playsInline: true,
    preload: "metadata",
    width: "100%",
    height: "100%",
    autoPlay: false,
    src: vimeoUrl + "#t=0.1",
    poster: showPoster ? poster.sourceUrl : null,
    className: "min-w-[100%] md:min-w-[100%]",
  }
  return (
    <div className="video-container">
      <div className="video">
        <LazyLoad>
          <video {...embedVideoProps} />
        </LazyLoad>
      </div>
    </div>
  )
}

Video.defaultProps = {
  vimeoUrl: "",
  poster: {},
  showPoster: true,
}

Video.propTypes = {
  vimeoUrl: PropTypes.string,
  poster: PropTypes.object,
}

export default Video
