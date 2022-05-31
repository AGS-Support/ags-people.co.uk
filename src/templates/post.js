import React from "react"
import parse from "html-react-parser"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Categories from "../components/Blog/Categories"

const Post = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  return (
    <Layout>
      <Seo title={post.title} />
      <section>
        <div className="inner-container">
          <div className="content">
            <Link to="/blog" rel="prev">
              ← Blog Home
            </Link>

            <h1>{parse(post.title)}</h1>
            <p>
              Posted: {post.date}
              <Categories categories={post.categories.nodes} />
            </p>
            {featuredImage?.data && (
              <GatsbyImage
                image={featuredImage.data}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }}
              />
            )}
            <div className="text-para">{parse(post.content)}</div>
            <nav className="blog-post-nav mt-16 flex justify-between">
              {previous ? (
                <div style={{ maxWidth: "48%" }}>
                  <Link to={previous.uri} rel="prev">
                    <p className="text-dark margin-reset text-left">Previous</p>
                    <div className="inline-flex">
                      <span>←&nbsp;&nbsp;</span>
                      <span>{parse(previous.title)}</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <div style={{ maxWidth: "48%" }}>
                  <div className="inline-flex"></div>
                </div>
              )}

              {next && (
                <div className="text-right" style={{ maxWidth: "48%" }}>
                  <Link to={next.uri} rel="prev">
                    <p className="text-dark margin-reset text-right">Next</p>
                    <div className="inline-flex">
                      <span>{parse(next.title)}</span>
                      <span>&nbsp;&nbsp;→</span>
                    </div>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Post

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
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
      categories {
        nodes {
          slug
          name
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
