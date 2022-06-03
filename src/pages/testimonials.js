import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Testimonials from "../components/Home/Testimonials"
import PageHeading from "../components/molecules/PageHeading"
const TestominialPage = ({ data }) => {
  const testimonials = data.allWpTestimonial.nodes

  return (
    <Layout>
      <Seo title="Testimonials" />
      <PageHeading title="Testimonials" />
      <section>
        <div className="container">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>
    </Layout>
  )
}
export default TestominialPage

export const query = graphql`
  query TestimonialPageQuery {
    allWpTestimonial(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        testimonials {
          title
          subTitle
          content
          showOnHomepage
        }
      }
    }
  }
`
