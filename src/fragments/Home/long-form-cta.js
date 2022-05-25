import React from "react"
import { graphql } from "gatsby"

export const longFormCtaFields = graphql`
  fragment longFormCtaFields on WpPage {
    homepage {
      longFormCta {
        headline
        content
        linkText
        linkUrl
      }
    }
  }
`
