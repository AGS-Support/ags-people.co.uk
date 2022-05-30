import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Video from "../components/Home/Banner/Video"
const CustomerStory = ({ data }) => {
  const story = data.wpCustomerStory.customerStories
  const logo = getImage(story.logo?.localFile)
  const poster = getImage(story.video.poster?.localFile)
  const previous = data.previous
  const next = data.next

  return (
    <Layout>
      <Seo title="Customer Story" />
      <section>
        <div class="container">
          <div class="content">
            <h1 className="text-center margin-reset">Customer Story</h1>
            <div className="mx-auto text-center my-3">
              <GatsbyImage image={logo} className="max-w-[200px]" />
            </div>
            <div className="mt-6">
              <Video {...story.video} />
            </div>
          </div>
        </div>
      </section>

      <section
        class="full-width section-tint angle-border angle-border-top angle-border-bottom angle-border-tint"
        style={{ marginTop: "-50px" }}
      >
        <div class="inner-container">
          <div class="content">
            <p>{story.heroTestimonial.quote}</p>
            <p>---{story.heroTestimonial.customer}</p>
          </div>
        </div>
      </section>
      <section>
        <div class="inner-container">
          <div class="content">
            <h2>Challenge</h2>
            <p className="text-para">{story.challenge}</p>
            <h2>Solution</h2>
            <p className="text-para">{story.solution}</p>
            <h2>Outcome</h2>
            <p className="text-para">{story.outcome.quote}</p>
            <p>---{story.outcome.customer}</p>
          </div>
          <div class="content">
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
