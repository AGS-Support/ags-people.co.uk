import React from "react"

import { useTestimonials } from "../hooks/use-testimonials"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import Testimonials from "../components/molecules/Testimonials"
import PageHeading from "../components/molecules/PageHeading"

const TestominialPage = ({ data }) => {
  const testimonials = useTestimonials()
  return (
    <Layout>
      <Seo title="Testimonials" />
      <PageHeading
        title="Testimonials"
        intro="<p>Going above & beyond in delivering the best services, we always see our clients as long-term partners—providing them with the support that helps them care more for their people.</p>"
      />
      <section>
        <div className="container">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>
    </Layout>
  )
}
export default TestominialPage
