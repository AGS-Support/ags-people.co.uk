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
  console.log("testimonials", testimonials)

  return (
    <Layout>
      <Seo title="Home" />
      <Banner {...content.hero} />
      <Quicklinks {...content.hero.quicksLinks} />

      <section>
        <div className="container">
          <div className="content">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
              <Service {...content.services.leftService} />
              <Service {...content.services.rightService} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint angle-border angle-border-top angle-border-bottom angle-border-tint">
        <div className="container">
          <div className="content">
            <h2 className="text-center">{content.customerLogos.headline}</h2>

            <div className="grid grid-cols-5  gap-8 brands mb-10 ">
              {content.customerLogos.logos.map((logo, index) => {
                var logo = getImage(logo.localFile)
                return (
                  <div className="brands__item">
                    <a href="#">
                      <GatsbyImage image={logo} />
                    </a>
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
        <div className="inner-container">
          <div className="content">
            <h2 className="text-center">
              {content.whatMakesAgsSpecial.headline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-8 md:gap-2 sm:gap-0 pl-[8%]">
              {content.whatMakesAgsSpecial.feature.map((feature, index) => {
                console.log("feature", feature)
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
            <div className="mx-auto mt-10 text-center">
              {content.whatMakesAgsSpecial.buttons.map((button, index) => {
                return (
                  <Link
                    to={button.url}
                    className={`
                    button  text-center
                    ${
                      index == 0
                        ? "text-white bg-primary border-2 border-primary mr-10 min-w-[250px]"
                        : "text-primary bg-white border-2 border-primary min-w-[250px]"
                    } `}
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    {button.text}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint angle-border angle-border-top angle-border-bottom angle-border-tint">
        <div className="inner-container">
          <div className="content">
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
