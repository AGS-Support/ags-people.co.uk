import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Testimonials from "../components/Home/Testimonials"

const TestominialPage = ({ data }) => {
  const testimonials = data.allWpTestimonial.nodes

  return (
    <Layout>
      <Seo title="Testimonials" />
      <section>
        <div className="container">
          <div class="content title">
            <h1 className="text-center">Testimonials</h1>
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default TestominialPage

export const query = graphql`
  query TestimonialPageQuery {
    allWpTestimonial {
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
