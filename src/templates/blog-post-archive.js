import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageHeading from "../components/molecules/PageHeading"
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
      <PageHeading title="Blog" />
      <section>
        <div className="container">
          <div className="flex flex-wrap -mx-4 mb-12">
            {posts.map(post => {
              return <PostSummary post={post} />
            })}
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
