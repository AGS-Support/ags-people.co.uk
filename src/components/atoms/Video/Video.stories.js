import React from "react"
import "../../../styles/global.css"

import Video from "./Video.storybook.jsx"

export default {
  component: Video,
  title: "Video",
}

const Template = args => <Video {...args} />

export const Primary = Template.bind({})
Primary.args = {
  vimeoUrl:
    "https://player.vimeo.com/progressive_redirect/playback/715488659/rendition/1080p/file.mp4?loc=external&signature=a235fc565c22dc8ee6b6f5ae850c1069b22cb10f9c95b6044ce7c873df95da8b",
  poster:
    "https://agsheadless.tempurl.host/wp-content/uploads/2022/05/ags-poster.jpg",
}
