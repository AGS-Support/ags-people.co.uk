import React from "react"
import PropTypes from "prop-types"
import { CheckCircleIcon } from "@heroicons/react/solid"

import Title from "../../atoms/Title"
import Button from "../../atoms/Button"

import ServiceFeatures from "../../molecules/ServiceFeatures"

const WhatMakesAGSSpecial = ({ headline, featureList, buttons }) => {
  const half = Math.ceil(featureList.length / 2)
  const Services = [featureList.splice(0, half), featureList.splice(-half)]

  return (
    <>
      <Title variant="h2" className="text-center">
        {headline}
      </Title>

      <div className="block md:flex md:justify-between inner-container">
        {Services.map((feature, index) => {
          return <ServiceFeatures features={feature} />
        })}
      </div>
      <div className="mx-auto mt-10 text-center block  md:flex md:justify-center">
        {buttons.map((button, index) => {
          return (
            <div className={`${index === 0 ? "md:mr-10" : "mr-0"}`}>
              <Button
                variant={`${index === 0 ? "primary" : "primary-outline"}`}
                size="md"
                width="grow"
              >
                {button.text}
              </Button>
            </div>
          )
        })}
      </div>
    </>
  )
}

WhatMakesAGSSpecial.defaultProps = {
  headline: "",
  featureList: [],
  buttons: [],
}

WhatMakesAGSSpecial.propTypes = {
  headline: PropTypes.string,
  featureList: PropTypes.array,
  buttons: PropTypes.array,
}

export default WhatMakesAGSSpecial
