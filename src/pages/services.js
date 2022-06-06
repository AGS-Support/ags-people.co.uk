import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Partners from "../components/molecules/Partners"
import PageHeading from "../components/molecules/PageHeading"
import CallToAction from "../components/molecules/CallToAction"

const ServicesPage = ({ data }) => {
  const services = data.allWpService.nodes
  const pageData = data.wpPage.servicePage
  const callToAction = pageData.servicesCallToAction

  return (
    <Layout>
      <Seo title="Services" />

      <PageHeading
        title={pageData.title}
        intro={pageData.content}
        className="text-center pb-4"
      />
      <Section background="light">
        {services.map((services, index) => {
          const service = services.services
          const serviceImage = getImage(service.image?.localFile)
          return (
            <>
              <Link to={services.slug}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 p-4 shadow-md mb-8 bg-white">
                  <GatsbyImage image={serviceImage} alt="Service Image" />
                  <div>
                    <h2 className="margin-reset">{service.title}</h2>
                    <p className="text-para">{service.excerpt}</p>
                    Learn More →
                  </div>
                </div>
              </Link>
            </>
          )
        })}
      </Section>
      <section>
        <div className="container">
          <div className="content text-center">
            <h2>Who We Work With</h2>
            <Partners />
          </div>
        </div>
      </section>

      <CallToAction {...callToAction} />
    </Layout>
  )
}
export default ServicesPage

export const query = graphql`
  query ServicesPageQuery {
    allWpService(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        slug
        services {
          title
          excerpt
          content

          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          serviceFeatures {
            headline
            content
          }
        }
      }
    }

    wpPage(tags: { nodes: { elemMatch: { slug: { eq: "services" } } } }) {
      servicePage {
        title
        content
        servicesCallToAction {
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
      }
    }
  }
`
