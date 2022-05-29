import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Banner from "../components/Home/Banner"
import Quicklinks from "../components/Home/QuickLinks"
import Service from "../components/Home/Service"
import Testimonials from "../components/Home/Testimonials"
import { CheckCircleIcon } from "@heroicons/react/solid"

const IndexPage = ({ data }) => {
  const content = data.wpPage.homepage
  const testimonials = data.allWpTestimonial.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <Banner {...content.hero} />
      <Quicklinks {...content.hero.quicksLinks} />

      <section>
        <div class="container">
          <div class="content">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
              <Service {...content.services.leftService} />
              <Service {...content.services.rightService} />
            </div>
          </div>
        </div>
      </section>

      <section class="section-tint angle-border angle-border-top angle-border-bottom angle-border-tint">
        <div class="container">
          <div class="content">
            <h2 className="text-center">{content.customerLogos.headline}</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
              {content.customerLogos.logos.map((logo, index) => {
                var logo = getImage(logo.localFile)
                return (
                  <div class="brands__item">
                    <a href="#">
                      <GatsbyImage image={logo} />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div class="content">
            <h2 className="text-center">Clients We’ve Helped to Thrive</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 lg:gap-8 md:gap-12 sm:gap-0">
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="inner-container">
          <div class="content">
            <h2 className="text-center">
              {content.whatMakesAgsSpecial.headline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-8 md:gap-12 sm:gap-0">
              {content.whatMakesAgsSpecial.feature.map((feature, index) => {
                console.log("feature", feature)
                return (
                  <p>
                    <CheckCircleIcon
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "green",
                        display: "inline",
                        marginRight: "8px",
                      }}
                    />
                    {feature.featureText}
                  </p>
                )
              })}
              {content.whatMakesAgsSpecial.buttons.map((button, index) => {
                return (
                  <Link
                    to={button.url}
                    className={`
                    button  text-center
                    ${
                      index == 0
                        ? "text-white bg-primary"
                        : "text-white bg-secondary"
                    } `}
                  >
                    {button.text}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="section-tint angle-border angle-border-top angle-border-bottom angle-border-tint">
        <div class="inner-container">
          <div class="content">
            <h2 className="text-center">{content.longFormCta.headline}</h2>
            <p className="text-center text-dark">
              {parse(content.longFormCta.content)}
            </p>
            <div className="text-center text-bold">
              <Link to={content.longFormCta.linkUrl} className="underline">
                {content.longFormCta.linkText}
              </Link>
              →
            </div>
          </div>
        </div>
      </section>
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
      ...longFormCtaFields
    }
    allWpTestimonial(
      filter: { testimonials: { showOnHomepage: { eq: true } } }
    ) {
      nodes {
        title
        content
        testimonials {
          showOnHomepage
        }
      }
    }
  }
`
