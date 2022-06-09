import { useStaticQuery, graphql } from "gatsby"

export const useTestimonials = () => {
  const { allWpTestimonial } = useStaticQuery(
    graphql`
      query Testimonials {
        allWpTestimonial(sort: { fields: menuOrder, order: ASC }) {
          nodes {
            testimonials {
              title
              subTitle
              content
              showOnHomepage
            }
          }
        }
      }
    `
  )
  return allWpTestimonial.nodes
}
