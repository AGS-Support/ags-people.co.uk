import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import PageHeading from "../../components/molecules/PageHeading"
import PostArchive from "../../components/organisms/PostArchive"

const Tag = ({ data }) => {
  const tag = data.wpTag
  const posts = tag.posts.nodes
  return (
    <Layout>
      <Seo title={`Tag > ${tag.name}`} />
      <PageHeading title={`Tag: ${tag.name}`} />
      <PostArchive posts={posts} />
    </Layout>
  )
}
export default Tag

export const query = graphql`
  query ($id: String) {
    wpTag(id: { eq: $id }) {
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
