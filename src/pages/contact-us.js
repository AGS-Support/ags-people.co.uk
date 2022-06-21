import React from "react"
import { graphql } from "gatsby"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import parse from "html-react-parser"

import { useOffices } from "../hooks/use-offices"
import { useOptionsContactDetails } from "../hooks/use-options-contact-details"

import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

import PageHeading from "../components/molecules/PageHeading"

const ContactUs = ({ data }) => {
  const offices = useOffices()
  const contactDetails = useOptionsContactDetails()

  const pageData = data.wpPage.contactUs

  return (
    <Layout>
      <Seo title="Contact Us" />
      <PageHeading title={pageData.headline} intro={pageData.intro} />
      <section>
        <div className="inner-container">
          <div className="content title">
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.GATSBY_CAPTCHA_V3_key}
            >
              <div
                className="text-center mb-8"
                style={{ borderBottom: "1px solid #f2f2f2" }}
              >
                <h2 className="text-para margin-reset text-[1.2rem] md:text-[1.8rem]">
                  <a href="tel:08450523597">0845 0523597 </a>
                </h2>
                <h2 className="text-para text-[1.2rem] md:text-[1.8rem]">
                  <a href="mailto:support@agssupport.co.uk">
                    support@agssupport.co.uk
                  </a>
                </h2>
              </div>

              <ContactForm title="Send us a message" />
            </GoogleReCaptchaProvider>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default ContactUs

export const pageQuery = graphql`
  query officeQuery {
    wpPage(tags: { nodes: { elemMatch: { name: { eq: "contact" } } } }) {
      contactUs {
        headline
        intro
        telephoneNumber
        emailAddress
      }
    }

    allWpOffice(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        offices {
          question: title
          answer: address
        }
      }
    }
  }
`
