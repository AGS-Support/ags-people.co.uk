import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Accordion from "../components/Accordion"

const FaqPage = ({ data }) => {
  const faqs = data.wpPage.faqs.faqs

  return (
    <Layout>
      <Seo title="FAQ" />
      <div className="inner-container">
        <div className="content">
          <h1 className="text-center">Frequently Asked Questions</h1>
          <section>
            {faqs.map((faq, index) => {
              const theFaq = faq.faq
              console.log(theFaq.questions)
              return (
                <>
                  <h2 className={`${index > 0 ? "mt-8" : ""} text-center`}>
                    {theFaq.type}
                  </h2>
                  <Accordion items={theFaq.questions} />
                </>
              )
            })}
          </section>
        </div>
      </div>
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
