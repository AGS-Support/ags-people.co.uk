import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Cta from "../components/CTA"
import Section from "../components/Section"

const ServicesPage = ({ data }) => {
  const services = data.allWpService.nodes
  const pageData = data.wpPage.servicePage
  const cta = data.wpPage.servicePage.cta
  return (
    <Layout>
      <Seo title="Home" />
      <section className="">
        <div className="inner-container">
          <div class="content text-center">
            <h1>{pageData.title}</h1>
            <p>{parse(pageData.content)}</p>
          </div>
        </div>
      </section>
      <Section background="light">
        {services.map((services, index) => {
          const service = services.services
          const serviceImage = getImage(service.image?.localFile)
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 p-4 shadow-md mb-8 bg-white">
              <GatsbyImage image={serviceImage} alt="Service Image" />
              <div>
                <h2>{service.title}</h2>
                <p className="text-para">{service.excerpt}</p>
                <Link to={services.slug}>Learn More →</Link>
              </div>
            </div>
          )
        })}
      </Section>
      <section>
        <div className="container">
          <div class="content text-center">
            <h2>Who We Work With</h2>
            <h3>Housing Associations</h3>
            <h3>Charities for the Homeless</h3>
            <h3>Local Council Authorities</h3>
          </div>
        </div>
      </section>
      <Cta {...cta} />
    </Layout>
  )
}
export default ServicesPage

export const query = graphql`
  query ServicesPageQuery {
    allWpService {
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
          cta {
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
        cta {
          background
          headline
          content
          button {
            link
            text
            internalUrl {
              ... on WpPage {
                uri
              }
            }
            externalUrl
          }
        }
      }
      whoWeAre {
        fieldGroupName
        headline
        intro
      }
    }
  }
`
