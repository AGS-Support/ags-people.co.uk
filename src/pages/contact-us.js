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
        <div className="container">
          <div className="content title">
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.GATSBY_CAPTCHA_V3_key}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 lg:gap-24">
                <div className="order-last md:order-first mt-10 md:mt-0">
                  <ContactForm />
                </div>
                <div>
                  <div className="text-left ">
                    <h2 className="  font-bold text-para margin-reset">
                      Telephone:
                    </h2>
                    <h3 className=" text-lg font-bold">
                      <a
                        className="underline"
                        href={`tel:${pageData.telephoneNumber}`}
                      >
                        {contactDetails.telephone}
                      </a>
                    </h3>
                    <h2 className="  font-bold text-para margin-reset">
                      Email:
                    </h2>
                    <h3 className="text-lg font-bold">
                      <a
                        className="underline"
                        href={`mailto:${pageData.emailAddress}`}
                      >
                        {contactDetails.email}
                      </a>
                    </h3>
                  </div>
                  <h2 className="  font-bold text-para margin-reset">
                    Offices:
                  </h2>

                  {offices.map((office, index) => {
                    const officeData = office.offices
                    return (
                      <div key={officeData.title}>
                        <h3 className="margin-reset text-lg font-bold text-para">
                          {officeData.title}
                          <br />
                          {officeData.region}
                        </h3>
                        <span className="text-para">
                          {parse(officeData.address)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
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
