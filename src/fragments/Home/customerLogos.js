import React from "react"
import { graphql } from "gatsby"

export const customerLogoFields = graphql`
  fragment customerLogoFields on WpPage {
    homepage {
      customerLogos {
        headline
        logos {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 50
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
