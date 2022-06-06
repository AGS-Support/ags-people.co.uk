import React from "react"
import PropTypes from "prop-types"
import { CheckCircleIcon } from "@heroicons/react/solid"

const ServiceFeatures = ({ features }) => {
  return (
    <div>
      {features.map((feature, index) => {
        return (
          <p>
            <CheckCircleIcon className="w-[24px] h-[24px] text-[#6AC259] inline mr-[8px]" />
            {feature.featureText}
          </p>
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
