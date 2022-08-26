import React from "react"
import { graphql } from "gatsby"

export const heroFields = graphql`
  fragment heroFields on WpPage {
    homepage {
      hero {
        headline
        subHeading
        video {
          vimeoUrl
          poster {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 1600
                  height: 900
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        button {
          text
          url
        }
        quicksLinks {
          headline
        }
      }
    }
  }
`
