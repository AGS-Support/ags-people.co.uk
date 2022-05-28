import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import PostSummary from "../../components/Blog/PostSummary"
const Category = ({ data }) => {
  const category = data.wpCategory

  const posts = category.posts.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <div class="container">
          <div class="content">
            <h1 className="text-center margin-reset">{category.name}</h1>
            <div class="flex flex-wrap -mx-4 mb-12">
              {posts.map(post => {
                return <PostSummary post={post} />
              })}
            </div>
          </div>
        </div>
      </section>
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
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
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
