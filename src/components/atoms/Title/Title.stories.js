import React from "react"
import "../../../styles/global.css"

import Title from "./Title"

export default {
  component: Title,
  title: "Title",
}

const Template = args => <Title {...args}>{args.title}</Title>

export const Primary = Template.bind({})
Primary.args = {
  variant: "h1",
  className: "",
  title: "This is a medium sized headline",
}
