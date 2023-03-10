import React from "react"
import parse from "html-react-parser"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import Button from "../components/atoms/Button"

import PostHeading from "../components/molecules/PostHeading"
import PostPagination from "../components/molecules/PostPagination"

const Post = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  return (
    <Layout>
      <Seo title={post.title} />
      <div className="mt-10 md:mt-0">
        <PostHeading
          title={post.title}
          summary={post.posts.summary}
          date={post.date}
          categories={post.categories.nodes}
        />
      </div>
      <section>
        <div className="image-container">
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </div>
      </section>

      <section>
        <div className="inner-container">
          <div className="content title">
            <div className="text-para">{parse(post.content)}</div>
            <PostPagination next={next} previous={previous} />
          </div>
        </div>
      </section>
      <section>
        <div className="inner-container">
          <div className="md:flex md:justify-between">
            <Button
              to="/customer-stories/"
              type="internal"
              variant="primary-outline"
            >
              Customer Stories
            </Button>
            <Button type="calendly" variant="primary">
              Get in touch
            </Button>
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
      title
      excerpt
      posts {
        summary
      }
      content
      date(formatString: "DD MMMM , YYYY")
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
