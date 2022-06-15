import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const CategoryPage = ({ data }) => {
  const categories = data.allWpCategory.nodes
  if (categories.length === 0) {
    return null
  }
  return (
    <Layout>
      <Seo title="Home" />

      <section>
        <div className="container">
          <ul>
            {categories.map((category, index) => {
              return (
                <li>
                  <Link to={category.uri}>{category.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query CategoryQuery {
    allWpCategory(filter: { count: { gt: 0 } }) {
      nodes {
        name
        uri
        count
      }
    }
  }
`
