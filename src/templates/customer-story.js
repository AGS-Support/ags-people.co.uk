import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import Video from "../components/atoms/Video"

import PageHeading from "../components/molecules/PageHeading"

const CustomerStory = ({ data }) => {
  const story = data.wpCustomerStory.customerStories
  const logo = getImage(story.logo?.localFile)
  const previous = data.previous
  const next = data.next
  const seo = data.wpCustomerStory.seo
  return (
    <Layout>
      <Seo seo={seo} />

      <PageHeading title="Customer Story" />

      <section>
        <div className="container">
          <div className="content title">
            <div className="mx-auto text-center my-3">
              <GatsbyImage
                image={logo}
                className="max-w-[200px] logo"
                alt="customer logo"
              />
            </div>
            {!story.video.vimeoUrl && <div className="mt-20"></div>}
            <div className="mt-6">
              <Video {...story.video} />
            </div>
          </div>
        </div>
      </section>

      <section
        className="full-width section-tint angle-border angle-border-top angle-border-bottom angle-border-tint"
        style={{ marginTop: "-50px" }}
      >
        <div className="inner-container">
          <div className="content">
            <p>{story.heroTestimonial.quote}</p>
            <p>---{story.heroTestimonial.customer}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="inner-container">
          <div className="content">
            <h2>Challenge</h2>
            <p className="text-para">{story.challenge}</p>
            <h2>Solution</h2>
            <p className="text-para">{story.solution}</p>
            <h2>Outcome</h2>
            <p className="text-para">{story.outcome.quote}</p>
            <p>---{story.outcome.customer}</p>
          </div>
          <div className="content">
            <nav
              className="blog-post-nav mt-16"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {previous ? (
                <div style={{ maxWidth: "48%" }}>
                  <Link to={previous.uri} rel="prev">
                    <p className="text-dark margin-reset text-left">Previous</p>
                    <div style={{ display: "inline-flex" }}>
                      <span>←&nbsp;&nbsp;</span>
                      <span>{parse(previous.title)}</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <div style={{ maxWidth: "48%" }}>
                  <div style={{ display: "inline-flex" }}></div>
                </div>
              )}

              {next && (
                <div className="text-right" style={{ maxWidth: "48%" }}>
                  <Link to={next.uri} rel="prev">
                    <p className="text-dark margin-reset text-right">Next</p>
                    <div style={{ display: "inline-flex" }}>
                      <span>{parse(next.title)}</span>
                      <span>&nbsp;&nbsp;→</span>
                    </div>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default CustomerStory

export const query = graphql`
  query ($id: String!, $previousPostId: String, $nextPostId: String) {
    wpCustomerStory(id: { eq: $id }) {
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
      customerStories {
        customerName
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        video {
          vimeoUrl
          poster {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        profile
        location
        heroTestimonial {
          quote
          customer
        }
        challenge
        outcome {
          quote
          customer
        }
        solution
      }
    }
    previous: wpCustomerStory(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpCustomerStory(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
