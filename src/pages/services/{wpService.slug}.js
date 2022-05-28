import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

const Service = ({ data }) => {
  const service = data.wpService.services
  const serviceImage = getImage(service.image?.localFile)
  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <div class="container">
          <div class="content">
            <h1 className="text-center margin-reset">{service.title}</h1>
            <div className="mx-auto text-center my-3">
              <GatsbyImage image={serviceImage} className="max-w-[200px]" />
            </div>
          </div>
        </div>
      </section>
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
          headline
          content
        }
      }
    }
  }
`
