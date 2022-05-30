import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const TermsAndConditionsPage = ({ data }) => {
  const termsAndCOnditionsPage = data.wpPage

  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <section>
        <div className="inner-container">
          <div className="content">
            <h1 className="text-center">Terms and Conditions</h1>
            <div className="text-dark">
              {parse(termsAndCOnditionsPage.content)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TermsAndConditionsPage

export const query = graphql`
  query TermsAndConditionsQuery {
    wpPage(
      tags: { nodes: { elemMatch: { name: { eq: "terms-and-conditions" } } } }
    ) {
      content
    }
  }
`
