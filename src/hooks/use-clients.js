import { useStaticQuery, graphql } from "gatsby"

export const useClients = () => {
  const { allWpClient } = useStaticQuery(
    graphql`
      query Clients {
        allWpClient(sort: { fields: menuOrder, order: ASC }) {
          nodes {
            clients {
              title
              logos {
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
          }
        }
      }
    `
  )
  return allWpClient.nodes
}
