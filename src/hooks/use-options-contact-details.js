import { useStaticQuery, graphql } from "gatsby"

export const useOptionsContactDetails = () => {
  const { allWp } = useStaticQuery(
    graphql`
      query OptionsContactDetails {
        allWp {
          nodes {
            indieRidgeOptionsContactDetails {
              contactDetailsOptions {
                telephone
                email
              }
            }
          }
        }
      }
    `
  )
  return allWp.nodes[0].indieRidgeOptionsContactDetails.contactDetailsOptions
}
