import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Testimonials from "../components/Home/Testimonials"

const TestominialPage = ({ data }) => {
  const testimonials = data.allWpTestimonial.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <section className="banner">
        <div className="container">
          <div class="content">
            <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 lg:gap-8 md:gap-12 sm:gap-0">
              <Testimonials testimonials={testimonials} />
            </div>
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
        title
        content
        testimonials {
          showOnHomepage
        }
      }
    }
  }
`
