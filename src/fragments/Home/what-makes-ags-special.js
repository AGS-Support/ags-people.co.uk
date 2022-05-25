import React from "react"
import { graphql } from "gatsby"

export const whatMakesAgsSpecialFields = graphql`
  fragment whatMakesAgsSpecialFields on WpPage {
    homepage {
      whatMakesAgsSpecial {
        headline
        feature {
          featureText
        }
        buttons {
          text
          url
        }
      }
    }
  }
`
