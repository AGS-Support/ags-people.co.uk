import { useStaticQuery, graphql } from "gatsby"

export const useMenuFooter = () => {
  const { wpMenu } = useStaticQuery(
    graphql`
      query menuFooter {
        wpMenu(locations: { eq: GATSBY_FOOTER_MENU }) {
          menuItems {
            nodes {
              label
              uri
            }
          }
        }
      }
    `
  )
  return wpMenu.nodes
}
