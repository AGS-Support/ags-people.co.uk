import React from "react"
import PropTypes from "prop-types"

import { CheckCircleIcon } from "@heroicons/react/solid"

const ServiceFeatures = ({ features }) => {
  return (
    <div>
      {features.map((feature, index) => {
        return (
          <div
            key={`servicefeature-${index}`}
            className="text-lg mb-10 flex items-center"
          >
            <CheckCircleIcon className="w-[24px] h-[24px] text-[#6AC259] inline mr-[8px]" />
            {feature.featureText}
          </div>
        )
      })}
    </div>
  )
}

ServiceFeatures.defaultProps = {
  features: [],
}

ServiceFeatures.propTypes = {
  features: PropTypes.array,
}

export default ServiceFeatures
