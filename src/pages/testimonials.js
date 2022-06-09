import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import Testimonials from "../components/molecules/Testimonials"
import PageHeading from "../components/molecules/PageHeading"

import { useTestimonials } from "../hooks/use-testimonials"

const TestominialPage = ({ data }) => {
  const testimonials = useTestimonials()
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
