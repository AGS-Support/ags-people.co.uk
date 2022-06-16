import React from "react"
import { Link, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Title from "../components/atoms/Title"

import LogoGrid from "../components/molecules/LogoGrid"
import PageHeading from "../components/molecules/PageHeading"
import CallToAction from "../components/molecules/CallToAction"

import { HorizontalCard } from "../components/organisms/Cards"

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
      <Section background="tint">
        {services.map((services, index) => {
          const service = services.services
          const serviceImage = getImage(service.image?.localFile)
          const uri = services.uri
          return (
            <Link to={uri}>
              <HorizontalCard
                image={serviceImage}
                title={service.title}
                bodyText={service.excerpt}
                linkText="Learn More"
                url={uri}
              />
            </Link>
          )
        })}
      </Section>
      <section>
        <div className="container">
          <div className="content text-center">
            <Title className="text-center" variant="h2">
              Who we work with
            </Title>
            <div className="grid grid-cols-3 md:grid-cols-6  gap-8 brands mb-10 ">
              <LogoGrid />
            </div>
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
        uri
        services {
          title
          excerpt
          content

          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600

                  aspectRatio: 1.9
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
        customerLogos {
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
