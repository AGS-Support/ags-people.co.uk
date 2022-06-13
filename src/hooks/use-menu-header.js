import { useStaticQuery, graphql } from "gatsby"

export const useMenuHeader = () => {
  const { wpMenu } = useStaticQuery(
    graphql`
      query menuHeader {
        wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
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
  return wpMenu.menuItems.nodes
}
