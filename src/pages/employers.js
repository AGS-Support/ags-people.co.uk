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

const EmployersPage = ({ data }) => {
  const services = data.allWpEmployer.nodes
  const pageData = data.wpPage.employersPage
  const callToAction = pageData.servicesCallToAction
  console.log("callToAction", callToAction)
  const seo = data.wpPage.seo
  return (
    <Layout>
      <Seo seo={seo} />

      <PageHeading
        title={pageData.title}
        intro={pageData.content}
        className="pb-4 text-center"
      />
      <Section background="tint">
        {services.map((services, index) => {
          const service = services.employer
          console.log("service", service)
          const serviceImage = getImage(service.image?.localFile)
          const uri = services.uri
          return (
            <HorizontalCard
              key={`services-card-${index}`}
              image={serviceImage}
              title={service.title}
              bodyText={service.excerpt}
              linkText="Learn More"
              url={uri}
            />
          )
        })}
      </Section>
      <section>
        <div className="container">
          <div className="text-center content">
            <Title className="text-center" variant="h2">
              Who we work with
            </Title>
            <div className="grid grid-cols-3 gap-8 mb-10 md:grid-cols-6 brands ">
              <LogoGrid />
            </div>
          </div>
        </div>
      </section>

      <CallToAction {...callToAction} />
    </Layout>
  )
}
export default EmployersPage

export const query = graphql`
  query EmployersPageQuery {
    allWpEmployer(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        slug
        uri
        employer {
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
          employersFeatures {
            headline
            content
          }
        }
      }
    }

    wpPage(tags: { nodes: { elemMatch: { slug: { eq: "employers" } } } }) {
      seo {
        metaDesc
        metaKeywords
        title
        twitterDescription
        opengraphType
        opengraphTitle
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterImage {
          sourceUrl
        }
      }
      employersPage {
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
        employersCallToAction {
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
