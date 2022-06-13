import { useStaticQuery, graphql } from "gatsby"

export const useOptionsLogos = () => {
  const { allWp } = useStaticQuery(
    graphql`
      query OptionsLogos {
        allWp {
          nodes {
            indieRidgeOptionsPartners {
              partners {
                customerLogos {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        height: 75
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allWp.nodes[0].indieRidgeOptionsPartners.partners.customerLogos
}
