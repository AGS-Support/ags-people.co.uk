import React from "react"
import { graphql } from "gatsby"

export const serviceFields = graphql`
  fragment serviceFields on WpPage {
    homepage {
      services {
        leftService {
          title
          content
          buttonText
          buttonUrl
          image {
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
        rightService {
          title
          content
          buttonText
          buttonUrl
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
