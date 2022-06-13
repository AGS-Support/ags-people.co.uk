import React from "react"
import { graphql } from "gatsby"

export const testominialFields = graphql`
  fragment testominialFields on WpPage {
    homepage {
      testimonials {
        headline
        testimonials {
          ... on WpTestimonial {
            id
            template {
              templateName
            }
            testimonials {
              title
              subTitle
              content
            }
          }
        }
      }
    }
  }
`
