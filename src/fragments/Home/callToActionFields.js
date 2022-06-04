import React from "react"
import { graphql } from "gatsby"

export const callToActionFields = graphql`
  fragment callToActionFields on WpPage {
    homepage {
      callToAction {
        background
        headline
        content
        button {
          text
          link
          externalUrl
          internalUrl {
            ... on WpPage {
              uri
            }
          }
        }
      }
    }
  }
`
