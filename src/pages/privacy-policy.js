import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Accordion from "../components/Accordion"

const PrivacyPolicyPage = ({ data }) => {
  const privacyPolicyPage = data.wpPage.privacyPolicyPage
  const cookies = privacyPolicyPage.wordpressCookies

  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <section>
        <div className="inner-container">
          <div className="content title">
            <h1 className="text-center">Privacy Policy</h1>
            <div className="text-dark">{parse(privacyPolicyPage.content)}</div>
            <Accordion items={cookies} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const query = graphql`
  query PrivacyQuery {
    wpPage(tags: { nodes: { elemMatch: { name: { eq: "privacy-policy" } } } }) {
      privacyPolicyPage {
        content
        wordpressCookies {
          answer: cookieDescription
          question: cookieName
        }
      }
    }
  }
`
