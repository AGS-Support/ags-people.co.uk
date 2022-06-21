import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SparklesIcon } from "@heroicons/react/solid"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Button from "../components/atoms/Button"

import CallToAction from "../components/molecules/CallToAction"

import { useOptionsContactDetails } from "../hooks/use-options-contact-details"

const Service = ({ data }) => {
  const service = data.wpService.services
  const seo = data.wpService.seo
  const serviceImage = getImage(service.image?.localFile)
  const callToAction = service.callToAction
  const contactDetails = useOptionsContactDetails()

  return (
    <Layout>
      <Seo title={service.title} seo={seo} />
      <section>
        <div className="container">
          <div className="content">
            <Button to="/services" variant="tertiary" arrowPosition="none">
              Services
            </Button>
            <h1 className="mt-10">{service.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
              <div className="order-2 md:order-1">
                <span className="text-dark">{parse(service.content)}</span>
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
                  <a
                    href={`tel:${contactDetails.telephone}`}
                    className="button  text-center text-white bg-secondary border-2 border-secondary"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <GatsbyImage
                  image={serviceImage}
                  className="max-h-[300px]"
                  alt="service image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-2  gap:5 md:gap-12">
          {service.serviceFeatures.map((feature, index) => {
            return (
              <div
                className="flex mt-10 md:mt-0"
                key={`service-feature-bp-${index}`}
              >
                <div>
                  <SparklesIcon className="w-[32px] h-[32px] text-slate-500 mr-2 mt-1" />
                </div>
                <div>
                  <h2 className="margin-reset">{feature.headline}</h2>
                  <span className="text-dark">{parse(feature.content)}</span>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <CallToAction {...callToAction} />
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
