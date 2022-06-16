import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Title from "../components/atoms/Title"

import LogoGrid from "../components/molecules/LogoGrid"
import PageHeading from "../components/molecules/PageHeading"
import CallToAction from "../components/molecules/CallToAction"

import { HorizontalCard } from "../components/organisms/Cards"

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
            <Link to={storyItem.uri}>
              <HorizontalCard
                image={storyPoster}
                eyebrowLogo={storyImage}
                title={story.customerName}
                bodyText={story.challenge}
                linkText="Learn More"
                url={storyItem.uri}
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
