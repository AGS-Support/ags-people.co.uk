import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Cta from "../components/CTA"
import Section from "../components/Section"

const CustomerStoriesPage = ({ data }) => {
  const stories = data.allWpCustomerStory.nodes
  const pageData = data.wpPage.servicePage
  const cta = pageData.cta
  const whoWeWorkWith = pageData.whoWeWorkWith
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
        {stories.map((storyItem, index) => {
          const story = storyItem.customerStories
          const storyImage = getImage(story.logo?.localFile)
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 p-4 shadow-md mb-8 bg-white">
              <GatsbyImage image={storyImage} alt="Service Image" />
              <div>
                <h2>{story.customerName}</h2>
                <p className="text-para">{story.challenge}</p>
                <Link to={storyItem.uri}>Learn More →</Link>
              </div>
            </div>
          )
        })}
      </Section>
      <section>
        <div className="container">
          <div class="content text-center">
            <h2>Who We Work With</h2>
            {whoWeWorkWith.map((sector, index) => {
              return (
                <>
                  <h3 className="text-center margin-reset">{sector.title}</h3>
                  <div className="grid grid-cols-5  gap-8 brands mb-10 ">
                    {sector.logos.map((logo, index) => {
                      var logo = getImage(logo.localFile)
                      return (
                        <div class="brands__item">
                          <a href="#">
                            <GatsbyImage image={logo} />
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>

      <Cta {...cta} />
    </Layout>
  )
}
export default CustomerStoriesPage

export const query = graphql`
  query StoriesPageQuery {
    allWpCustomerStory {
      nodes {
        uri
        customerStories {
          customerName
          challenge
          logo {
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
        whoWeWorkWith {
          title
          logos {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 50
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
