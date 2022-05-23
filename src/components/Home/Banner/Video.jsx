import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FsLightbox from "fslightbox-react"
import playIcon from "../../../assets/images/play-white.jpeg"

const Video = ({ vimeoUrl, poster }) => {
  const [toggler, setToggler] = useState(false)
  if (!vimeoUrl || !poster) {
    return null
  }
  const videoPoster = getImage(poster?.localFile)
  const videoProps = {
    controls: true,
    playsInline: true,
    preload: "metadata",
    autoPlay: true,
    src: vimeoUrl + "#t=0.001",
    style: { minWidth: "75vw" },
  }
  return (
    <div className="video-container">
      <div className="video">
        <div className="video-icon-play" style={{ zIndex: "2" }}>
          <img src={playIcon} onClick={() => setToggler(!toggler)} />
        </div>
        <GatsbyImage
          image={videoPoster}
          alt="video"
          onClick={() => setToggler(!toggler)}
        />
        <FsLightbox
          toggler={toggler}
          sources={[<video {...videoProps} />]}
          type="video"
        />
      </div>
    </div>
  )
}
export default Video
