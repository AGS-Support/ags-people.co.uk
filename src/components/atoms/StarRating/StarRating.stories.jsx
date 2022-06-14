import React from "react"
import "../../../styles/global.css"

import StarRating from "./StarRating"

export default {
  component: StarRating,
  title: "Star Rating",
  argTypes: {
    numStars: {
      description: "0-5 stars",
      control: "number",
      defaultValue: 5,
      table: {
        type: {
          summary: "integer",
        },
      },
    },

    className: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: "h-55 w-55 text-red-500",
    },
  },
}

const Template = args => (
  <div className="flex">
    <StarRating {...args} />
  </div>
)

export const Default = Template.bind({})
