import { useStaticQuery, graphql } from "gatsby"

export const useQuickLinks = () => {
  const { allWpService } = useStaticQuery(
    graphql`
      query QuickLinks {
        allWpService(sort: { fields: menuOrder, order: ASC }) {
          nodes {
            slug
            uri
            services {
              title
            }
          }
        }
      }
    `
  )
  return allWpService.nodes
}
