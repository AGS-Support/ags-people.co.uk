import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Quicklinks from "../components/Quicklinks"

import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data }) => {
  const videoProps = {
    controls: true,
    playsInline: true,
    preload: "metadata",
    autoPlay: true,
    src:
      "https://player.vimeo.com/progressive_redirect/playback/707708231/rendition/1080p/file.mp4?loc=external&signature=c59541f967fbf3a9c41741426957784b41426aeb5b7c17b2200b3aea47063d9d" +
      "#t=0.001",
    style: { minWidth: "75vw" },
  }

  const content = data.wpPage.homepage
  const videoPoster = getImage(content.hero.video.poster?.localFile)
  const leftServiceImage = getImage(
    content.services.leftService.image?.localFile
  )
  const rightServiceImage = getImage(
    content.services.rightService.image?.localFile
  )
  const [toggler, setToggler] = useState(false)
  return (
    <Layout>
      <Seo title="Home" />
      <section class="banner">
        <div class="container">
          <div class="content">
            <div class="headline">
              <h1>{parse(content.hero.headline)}</h1>
              <p class="bump">{parse(content.hero.subHeading)}</p>

              <a href="#0" class="button button--primary button--large">
                {content.hero.button.text}
              </a>
            </div>
            <div class="video-container">
              <div class="video">
                <div class="video-icon-play" style={{ zIndex: "2" }}>
                  <img src="https://icon-library.com/images/play-icon-white-png/play-icon-white-png-4.jpg" />
                </div>
                <GatsbyImage
                  image={videoPoster}
                  alt="video"
                  onClick={() => setToggler(!toggler)}
                />
              </div>
            </div>

            <FsLightbox
              toggler={toggler}
              sources={[<video {...videoProps} />]}
              type="video"
            />
          </div>
        </div>
      </section>
      <section class="quick-links angle-border angle-border-top angle-border-brand">
        <div class="container">
          <div class="content">
            <h2 class="margin-reset">{content.hero.quicksLinks.headline}</h2>
            <Quicklinks links={content.hero.quicksLinks.links} />
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="content">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
              <div id="left-service" className="mb-10 md:mb-0">
                <GatsbyImage image={leftServiceImage} alt="Left Service" />

                <h2 className="margin-reset" style={{ marginTop: "2.2rem" }}>
                  {content.services.leftService.title}
                </h2>
                <p className="mt-8 text-slate-500">
                  {parse(content.services.leftService.content)}
                </p>
                <div className="py-3">
                  <Link
                    to={content.services.leftService.buttonUrl}
                    className="text-brand bg-tint hover:bg-tint/80 text-white font-bold py-4 px-4 rounded"
                  >
                    {content.services.leftService.buttonText}
                  </Link>
                </div>
              </div>
              <div id="right-service">
                <GatsbyImage image={rightServiceImage} alt="Right Service" />

                <h2 className="margin-reset" style={{ marginTop: "2.2rem" }}>
                  {content.services.rightService.title}
                </h2>
                <p className="mt-8 text-slate-500">
                  {parse(content.services.rightService.content)}
                </p>
                <div className="py-3">
                  <Link
                    to={content.services.rightService.buttonUrl}
                    className="text-brand bg-tint hover:bg-tint/80 text-white font-bold py-4 px-4 rounded"
                  >
                    {content.services.rightService.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-tint angle-border angle-border-top angle-border-bottom angle-border-tint">
        <div class="container">
          <div class="content">
            <h2>{content.customerLogos.headline}</h2>
            <p>LOGOS</p>
          </div>
          <div class="content">
            <h2>What clients say...</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 lg:gap-8 md:gap-12 sm:gap-0">
              <div className="border-solid border-2 border-gray-300 p-8 bg-white mb-26 shadow-md">
                <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
                  <h5 className="text-lg font-bold">Housing Manager YMCA</h5>
                  <h5 className="text-brand text-xl text-right">⭐⭐⭐⭐⭐</h5>
                </div>
                <p>
                  “Our YMCA is a Supported housing project with 73 bed spaces.
                  22 of these are high support for complex and chaotic need and
                  the remainder are low support. We are staffed 24 hours a day
                  and use a combination of our own Support workers and AGS
                  Support staff to staff the building. AGS Support staff are
                  used with or without our own staff to cover mainly nights and
                  some adhoc day shifts at short notice.”
                </p>
              </div>
              <div className="border-solid border-2 border-gray-300 p-8 bg-white shadow-md">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pb-6">
                  <h5 className="text-lg font-bold">Housing Manager YMCA</h5>
                  <h5 className="text-brand text-xl text-right">⭐⭐⭐⭐⭐</h5>
                </div>
                <p>
                  “Our YMCA is a Supported housing project with 73 bed spaces.
                  22 of these are high support for complex and chaotic need and
                  the remainder are low support. We are staffed 24 hours a day
                  and use a combination of our own Support workers and AGS
                  Support staff to staff the building. AGS Support staff are
                  used with or without our own staff to cover mainly nights and
                  some adhoc day shifts at short notice.”
                </p>
              </div>
              <div className="border-solid border-2 border-gray-300 p-8 bg-white shadow-md">
                <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
                  <h5 className="text-lg font-bold">Housing Manager YMCA</h5>
                  <h5 className="text-brand text-xl text-right">⭐⭐⭐⭐⭐</h5>
                </div>
                <p>
                  “Our YMCA is a Supported housing project with 73 bed spaces.
                  22 of these are high support for complex and chaotic need and
                  the remainder are low support. We are staffed 24 hours a day
                  and use a combination of our own Support workers and AGS
                  Support staff to staff the building. AGS Support staff are
                  used with or without our own staff to cover mainly nights and
                  some adhoc day shifts at short notice.”
                </p>
              </div>
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
            vimeoUrl
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
