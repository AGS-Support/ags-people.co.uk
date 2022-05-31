import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PostSummary from "../components/Blog/PostSummary"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <section>
        <div className="container">
          <div className="content title">
            <h1 className="text-center">Blog</h1>

            <div className="flex flex-wrap -mx-4 mb-12">
              {posts.map(post => {
                const title = post.title
                const featuredImage = {
                  data: post.featuredImage?.node?.localFile?.childImageSharp
                    ?.gatsbyImageData,
                  alt: post.featuredImage?.node?.alt || ``,
                }

                return <PostSummary post={post} />
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="content">
            {previousPagePath && (
              <>
                <Link to={previousPagePath}>Previous page</Link>
                <br />
              </>
            )}
            {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
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
`
