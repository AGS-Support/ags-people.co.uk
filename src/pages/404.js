import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Section>
      <div className="container text-center">
        <div className="content">
          <h1>404</h1>
          <h2>Sorry, this page could not be found.</h2>
          <Link to="/" className="text-primary font-bold uppercase underline">
            Go Back Home →
          </Link>
        </div>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
