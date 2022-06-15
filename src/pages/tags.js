import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const TagsPage = ({ data }) => {
  const allTags = data.allWpTag.nodes
  // filter out all tags which are attached to a page (we use these as special tags to help with graphql queries)
  const postTags = allTags.filter(item => item.pages.length === 0)

  return (
    <Layout>
      <Seo title="Home" />

      <section>
        <div className="container">
          {postTags.length === 0 ? (
            <h1>No Tags</h1>
          ) : (
            <ul>
              {postTags.map((tag, index) => {
                return (
                  <li>
                    <Link to={tag.uri}>{tag.name}</Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagQuery {
    allWpTag(filter: { count: { gt: 0 } }) {
      nodes {
        name
        uri
        count
        pages {
          nodes {
            title
          }
        }
      }
    }
  }
`
