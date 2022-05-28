import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import Cta from "../../components/CTA"
import Section from "../../components/Section"
const Service = ({ data }) => {
  const service = data.wpService.services
  const serviceImage = getImage(service.image?.localFile)
  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <div class="container">
          <div class="content">
            <h1 className="">{service.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
              <div>
                <p className="text-dark">{parse(service.content)}</p>
                <Link
                  to="#0"
                  className="bg-primary  text-white font-bold p-4 rounded"
                >
                  Call Us Now
                </Link>
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
      <Cta {...service.cta} />
    </Layout>
  )
}
export default Service

export const query = graphql`
  query ($id: String) {
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
        serviceFeatures {
          headline
          content
        }
        cta {
          background
          headline
          content
          button {
            text
            link
            internalUrl {
              ... on WpPage {
                id
                uri
              }
            }
            externalUrl
          }
        }
      }
    }
  }
`
