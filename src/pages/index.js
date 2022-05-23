import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Banner from "../components/Home/Banner"
import Quicklinks from "../components/Home/Quicklinks"
import Service from "../components/Home/Service"
import Testimonials from "../components/Home/Testimonials"

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
            <h2>{content.customerLogos.headline}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12">
              {content.customerLogos.logos.map((logo, index) => {
                var logo = getImage(logo.localFile)
                return <GatsbyImage image={logo} />
              })}
            </div>
          </div>
          <div class="content">
            <h2>Clients We’ve Helped to Thrive</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 lg:gap-8 md:gap-12 sm:gap-0">
              <Testimonials testimonials={testimonials} />
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
      homepage {
        hero {
          headline
          subHeading
          video {
            vimeoUrl
            poster {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          button {
            text
            url
          }
          quicksLinks {
            headline
            links {
              name
              url
            }
          }
        }

        services {
          leftService {
            title
            content
            buttonText
            buttonUrl
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          rightService {
            title
            content
            buttonText
            buttonUrl
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }

        customerLogos {
          headline
          logos {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
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
