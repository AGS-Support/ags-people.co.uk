import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import PageHeading from "../components/molecules/PageHeading"
import PostPagination from "../components/molecules/PostPagination"

import PostArchive from "../components/organisms/PostArchive"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <p>Our Blog is coming soon. Check back soon to see all of our posts.</p>
      </Layout>
    )
  }
  let previous,
    next = null

  if (nextPagePath) {
    next = {
      uri: nextPagePath,
      title: "Next Page",
    }
  }

  if (previousPagePath) {
    previous = {
      uri: previousPagePath,
      title: "Previous Page",
    }
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <PageHeading title="Blog" />
      <PostArchive posts={posts} />
      <section>
        <div className="container">
          <div className="content">
            <PostPagination next={next} previous={previous} hideTopText />
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
