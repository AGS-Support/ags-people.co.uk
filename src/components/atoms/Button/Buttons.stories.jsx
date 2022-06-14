import React from "react"
import "../../../styles/global.css"

import Button from "./Button.storybook.jsx"

export default {
  component: Button,
  title: "Button",
  argTypes: {
    variant: {
      description: "Controls the look of the button",
      name: "variant",
      type: { name: "string", required: false },
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: "primary",
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "primary-outline",
        "secondary-outline",
        "white-outline",
      ],
    },
    type: {
      description:
        "calendly will auto populate the calendly link from the environment variable",
      control: "select",
      options: ["internal", "external", "calendly"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Controls padding",
      control: "select",
      options: ["sm", "md", "lg"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      defaultValue: "normal",
      description:
        "Wide button gives more padding. Only works for non tertiary links",
      control: "select",
      options: ["normal", "grow"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    arrowPosition: {
      description: "Position of the arrow for tertiary buttons",
      control: "select",
      options: ["none", "left", "right"],
      table: {
        type: {
          summary: "string",
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
      defaultValue:
        "font-bold rounded rounded-lg border-2 text-center w-[100%] mb-5 md:mb-0",
    },
    to: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}

const Template = args => (
  <div className="p-10">
    <Button {...args}>{args.text}</Button>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: "Read More",
  to: "/",
  size: "md",
  type: "internal",
  arrowPosition: "right",
}
