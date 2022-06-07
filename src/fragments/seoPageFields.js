import React from "react"
import { graphql } from "gatsby"

export const seoFields = graphql`
  fragment seoFields on WpPage {
    seo {
      metaDesc
      metaKeywords
      title
      opengraphImage {
        altText
        sourceUrl
        srcSet
      }
    }
  }
`
