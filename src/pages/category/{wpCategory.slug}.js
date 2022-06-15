import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import PageHeading from "../../components/molecules/PageHeading"
import PostArchive from "../../components/organisms/PostArchive"

const Category = ({ data }) => {
  const category = data.wpCategory

  const posts = category.posts.nodes
  return (
    <Layout>
      <Seo title={`Category > ${category.name}`} />
      <PageHeading title={`Category: ${category.name}`} />
      <PostArchive posts={posts} />
    </Layout>
  )
}
export default Category

export const query = graphql`
  query ($id: String) {
    wpCategory(id: { eq: $id }) {
      slug
      name
      posts {
        nodes {
          uri
          date(formatString: "DD MMMM , YYYY")
          title
          excerpt
          posts {
            summary
          }
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    height: 300
                    quality: 100
                    placeholder: TRACED_SVG
                    layout: FULL_WIDTH
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
