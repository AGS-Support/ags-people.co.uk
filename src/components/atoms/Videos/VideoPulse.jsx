import React, { useState, useRef, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import LazyLoad from "react-lazyload"

import * as videoStyles from "./video.module.css"

const VideoPulse = ({ vimeoUrl, poster }) => {
  const posterImage = getImage(poster.localFile)

  const url = vimeoUrl
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    // delay setting visibility of the video to give the image time to load
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const startPlaying = e => {
    let video = videoRef.current
    video.play()
    setIsPlaying(true)
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      startPlaying()
    }
  }

  if (!url || !poster) {
    return (
      <p>
        Please provide a url <em>and</em> poster image
      </p>
    )
  }

  const embedVideoProps = {
    controls: true,
    playsInline: true,
    preload: "metadata",
    width: "100%",
    height: "auto",
    autoPlay: false,
    src: url,
    track: "",
  }

  return (
    <div
      className={`${videoStyles.videoPulseContainer} relative w-full aspect-video mb-8 md:-mb-8`}
    >
      <div
        role={"button"}
        aria-label="Play Video"
        tabIndex={0}
        onClick={startPlaying}
        onKeyDown={handleKeyDown}
        className={isPlaying ? "hidden" : videoStyles.videoPoster}
      >
        <GatsbyImage
          image={posterImage}
          className={isPlaying ? "hidden" : videoStyles.videoPoster}
          alt="Video Poster"
        />
      </div>
      <div
        className={isPlaying ? "hidden" : videoStyles.playBtn}
        role={"button"}
        aria-label="Play Video"
        tabIndex={0}
        onClick={startPlaying}
        onKeyDown={handleKeyDown}
      ></div>
      <LazyLoad>
        <video
          ref={videoRef}
          {...embedVideoProps}
          className={showVideo ? "visible" : "invisible"}
        />
      </LazyLoad>
    </div>
  )
}

VideoPulse.defaultProps = {
  url: "",
  poster: {},
}

VideoPulse.propTypes = {
  url: PropTypes.string,
  poster: PropTypes.object,
}

export default VideoPulse
