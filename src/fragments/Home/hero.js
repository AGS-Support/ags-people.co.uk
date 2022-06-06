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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
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
