import { useStaticQuery, graphql } from "gatsby"

export const useOffices = () => {
  const { allWpOffice } = useStaticQuery(
    graphql`
      query Offices {
        allWpOffice(sort: { fields: menuOrder, order: ASC }) {
          nodes {
            offices {
              title
              region
              address
            }
          }
        }
      }
    `
  )
  return allWpOffice.nodes
}
