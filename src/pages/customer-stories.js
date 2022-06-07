import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Partners from "../components/molecules/Partners"
import PageHeading from "../components/molecules/PageHeading"
import CallToAction from "../components/molecules/CallToAction"

const CustomerStoriesPage = ({ data }) => {
  const stories = data.allWpCustomerStory.nodes
  const pageData = data.wpPage.customerStoriesPage
  const callToAction = pageData.callToAction

  return (
    <Layout>
      <Seo title="Customer Stories" />
      <PageHeading
        title={pageData.title}
        intro={pageData.content}
        className="text-center pb-4"
      />
      <Section background="light">
        {stories.map((storyItem, index) => {
          const story = storyItem.customerStories
          const storyImage = getImage(story.logo?.localFile)
          const storyPoster = getImage(story.video?.poster?.localFile)
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 p-4 shadow-md mb-8 bg-white">
              <div>
                <GatsbyImage
                  image={storyPoster}
                  objectFit="contain"
                  alt="Service Image"
                />
              </div>
              <div>
                <div className="mt-10 md:mt-0 mb-5">
                  <GatsbyImage
                    image={storyImage}
                    objectFit="contain"
                    alt="Service Image"
                    style={{ width: "150px" }}
                  />
                </div>
                <h2 className="margin-reset">{story.customerName}</h2>
                <p className="text-para">{story.challenge}</p>
                <Link to={storyItem.uri}>Learn More →</Link>
              </div>
            </div>
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
export default CustomerStoriesPage

export const query = graphql`
  query StoriesPageQuery {
    allWpCustomerStory(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        uri
        customerStories {
          customerName
          challenge
          video {
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

    wpPage(
      tags: { nodes: { elemMatch: { slug: { eq: "customer-stories" } } } }
    ) {
      customerStoriesPage {
        title
        content
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
      }
    }
  }
`
