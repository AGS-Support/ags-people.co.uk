import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Button from "../components/atoms/Button"
import Banner from "../components/Home/Banner"
import Quicklinks from "../components/organisms/QuickLinks"
import Service from "../components/Home/Service"
import Testimonials from "../components/Home/Testimonials"
import ServiceBanner from "../components/organisms/ServiceBanner"
import CallToAction from "../components/molecules/CallToAction"
import { CheckCircleIcon } from "@heroicons/react/solid"

const IndexPage = ({ data }) => {
  const content = data.wpPage.homepage
  const testimonials = data.allWpTestimonial.nodes
  const featureList = content.whatMakesAgsSpecial.feature

  const half = Math.ceil(featureList.length / 2)
  const featuresFirstHalf = featureList.splice(0, half)
  const featuresSecondHalf = featureList.splice(-half)

  const cta = content.callToAction

  return (
    <Layout>
      <Seo title="Home" />
      <Banner {...content.hero} />
      <Quicklinks {...content.hero.quicksLinks} />

      <section>
        <div className="container">
          <div className="content">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
              <ServiceBanner {...content.services.leftService} />
              <ServiceBanner {...content.services.rightService} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint angle-border angle-border-top angle-border-bottom angle-border-tint">
        <div className="container">
          <div className="content">
            <h2 className="text-center">{content.customerLogos.headline}</h2>

            <div className="grid grid-cols-3 md:grid-cols-5  gap-8 brands mb-10 ">
              {content.customerLogos.logos.map((logo, index) => {
                var logoImage = getImage(logo.localFile)
                return (
                  <div
                    className={`brands__item ${
                      index > 8 ? "hidden md:inline" : "visible"
                    }`}
                  >
                    <span>
                      <GatsbyImage image={logoImage} />
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="content">
            <h2 className="text-center">Clients We’ve Helped to Thrive</h2>
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content">
            <h2 className="text-center">
              {content.whatMakesAgsSpecial.headline}
            </h2>

            <div className="block md:flex md:justify-between inner-container">
              <div>
                {featuresFirstHalf.map((feature, index) => {
                  return (
                    <p>
                      <CheckCircleIcon
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#6AC259",
                          display: "inline",
                          marginRight: "8px",
                        }}
                      />
                      {feature.featureText}
                    </p>
                  )
                })}
              </div>
              <div>
                {featuresSecondHalf.map((feature, index) => {
                  return (
                    <p>
                      <CheckCircleIcon
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#6AC259",
                          display: "inline",
                          marginRight: "8px",
                        }}
                      />
                      {feature.featureText}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="mx-auto mt-10 text-center block  md:flex md:justify-center">
              {content.whatMakesAgsSpecial.buttons.map((button, index) => {
                return (
                  <div className={`${index === 0 ? "md:mr-10" : "mr-0"}`}>
                    <Button
                      variant={`${index === 0 ? "primary" : "primary-outline"}`}
                      size="md"
                      width="grow"
                    >
                      {button.text}
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <CallToAction {...cta} />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query HomePageQuery {
    wpPage(isFrontPage: { eq: true }) {
      ...heroFields
      ...serviceFields
      ...whatMakesAgsSpecialFields
      ...customerLogoFields
      ...callToActionFields
    }
    allWpTestimonial(
      filter: { testimonials: { showOnHomepage: { eq: true } } }
    ) {
      nodes {
        testimonials {
          title
          subTitle
          content
          showOnHomepage
        }
      }
    }
  }
`
