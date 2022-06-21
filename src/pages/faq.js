import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import Title from "../components/atoms/Title"

import PageHeading from "../components/molecules/PageHeading"
import Accordion from "../components/molecules/Accordion"

const FaqPage = ({ data }) => {
  const faqs = data.wpPage.faqs.faqs

  return (
    <Layout>
      <Seo title="FAQ" />
      <PageHeading
        title="Frequently Asked Questions"
        intro="<p>Got any questions about our services? Wondering how we can help with your specific challenges? Whether you find your answer below or not, feel free to reach out to us at any time.</p>"
      />
      <section>
        <div className="inner-container">
          <div className="content">
            <section>
              {faqs.map((faq, index) => {
                const theFaq = faq.faq

                return (
                  <div key={`faq-section-${index}`}>
                    <Title
                      variant="h2"
                      className={`${
                        index > 0 ? "mt-10" : ""
                      } mb-0 text-center md:text-left`}
                    >
                      {theFaq.type}
                    </Title>
                    <Accordion items={theFaq.questions} sectionNumber={index} />
                  </div>
                )
              })}
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FaqPage

export const query = graphql`
  query FaqQuery {
    wpPage(tags: { nodes: { elemMatch: { name: { eq: "faq" } } } }) {
      faqs {
        faqs {
          faq {
            type
            questions {
              answer
              question
            }
          }
        }
      }
    }
  }
`
