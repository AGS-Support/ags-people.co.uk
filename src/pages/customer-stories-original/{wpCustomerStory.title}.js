import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import Video from "../../components/Home/Banner/Video"
const CustomerStory = ({ data }) => {
  const story = data.wpCustomerStory.customerStories
  const logo = getImage(story.logo?.localFile)
  const poster = getImage(story.video.poster?.localFile)
  console.log("video", story.video)
  return (
    <Layout>
      <Seo title="Home" />
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
      </div>
    </Layout>
  )
}
export default CustomerStory

export const query = graphql`
  query ($id: String) {
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
  }
`
