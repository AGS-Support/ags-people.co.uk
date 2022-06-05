import React from "react"
import { graphql } from "gatsby"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import parse from "html-react-parser"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageHeading from "../components/molecules/PageHeading"
import Accordion from "../components/Accordion"
const ContactUs = ({ data }) => {
  const pageData = data.wpPage.contactUs
  //get our office array in format suitable for Accordion component to consume
  const offices = data.allWpOffice.nodes.map((office, index) => {
    return {
      question: office.offices.question,
      answer: office.offices.answer,
    }
  })

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
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
                <div className="order-last md:order-first mt-10 md:mt-0">
                  <ContactForm />
                </div>
                <div>
                  <div className="text-left">
                    <h2 className="mb-3 ">Contact Us</h2>
                    <p>
                      Tel:{" "}
                      <a
                        className="underline"
                        href={`tel:${pageData.telephoneNumber}`}
                      >
                        {pageData.telephoneNumber}
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        className="underline"
                        href={`mailto:${pageData.emailAddress}`}
                      >
                        {pageData.emailAddress}
                      </a>
                    </p>
                  </div>
                  <h2 className="margin-reset text-center md:text-left hidden">
                    Offices
                  </h2>

                  {offices.map((item, index) => {
                    return (
                      <>
                        <h3 className="margin-reset text-lg font-bold">
                          {item.question}
                        </h3>
                        <span className="text-para">{parse(item.answer)}</span>
                      </>
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
