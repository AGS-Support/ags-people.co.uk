import { useStaticQuery, graphql } from "gatsby"

export const useOptions = () => {
  const { allWp } = useStaticQuery(
    graphql`
      query useOptions {
        allWp {
          nodes {
            indieRidgeOptionsContactDetails {
              contactDetailsOptions {
                telephone
                email
                socialMediaAccounts {
                  facebook
                  linkedIn
                }
              }
            }
            indieRidgeOptionsCompanyInfo {
              companyInfoOptions {
                companyName
                companyNumber
                vatNumber
                registeredAddress
              }
            }
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
            indieRidgeOptionsFooter {
              footerOptions {
                footerBlurb
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
        }
      }
    `
  )
  return allWp.nodes[0]
}
