import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Cta from "../components/CTA"
import Section from "../components/Section"
const Service = ({ data }) => {
  console.log("data", data)
  const service = data.wpService.services
  const serviceImage = getImage(service.image?.localFile)
  const callToAction = service.callToAction
  const previous = data.previous
  const next = data.next
  return (
    <Layout>
      <Seo title={service.title} />
      <section>
        <div class="container">
          <div class="content">
            <h1 className="">{service.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
              <div>
                <p className="text-dark">{parse(service.content)}</p>
                <div className="hidden sm:block">
                  <Link
                    to="/contact-us"
                    className="button  text-center text-white bg-secondary border-2 border-secondary"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    Call Us Now
                  </Link>
                </div>
                <div className="block sm:hidden">
                  <Link
                    to="tel:+614-988-868-868"
                    className="button  text-center text-white bg-secondary border-2 border-secondary"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    Call Us Now
                  </Link>
                </div>
              </div>
              <div>
                <GatsbyImage image={serviceImage} className="max-h-[300px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section background="light">
        <div className="grid grid-cols-2  gap-12">
          {service.serviceFeatures.map((feature, index) => {
            return (
              <div>
                <h2>{feature.headline}</h2>
                <p className="text-dark">{parse(feature.content)}</p>
              </div>
            )
          })}
        </div>
      </Section>
      <div style={{ height: "5px" }}></div>
      <Cta {...callToAction} />
      <section>
        <div class="container">
          <div className="content">
            <nav
              className="blog-post-nav mt-16"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {previous ? (
                <div style={{ maxWidth: "48%" }}>
                  <Link to={previous.uri} rel="prev">
                    <p className="text-dark margin-reset text-left">Previous</p>
                    <div style={{ display: "inline-flex" }}>
                      <span>←&nbsp;&nbsp;</span>
                      <span>{parse(previous.title)}</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <div style={{ maxWidth: "48%" }}>
                  <div style={{ display: "inline-flex" }}></div>
                </div>
              )}

              {next && (
                <div className="text-right" style={{ maxWidth: "48%" }}>
                  <Link to={next.uri} rel="prev">
                    <p className="text-dark margin-reset text-right">Next</p>
                    <div style={{ display: "inline-flex" }}>
                      <span>{parse(next.title)}</span>
                      <span>&nbsp;&nbsp;→</span>
                    </div>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Service

export const query = graphql`
  query ServiceById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    wpService(id: { eq: $id }) {
      services {
        title
        content
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        callToAction {
          background
          headline
          content
          button {
            text
            link
            externalUrl
            internalUrl {
              ... on WpPage {
                uri
              }
            }
          }
        }
        serviceFeatures {
          headline
          content
        }
      }
    }
    previous: wpService(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpService(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
