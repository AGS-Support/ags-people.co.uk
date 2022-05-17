import * as React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Quicklinks from "../components/Quicklinks"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data }) => {
  const content = data.wpPage.homepage
  console.log("data", data.wpPage.homepage)
  return (
    <Layout>
      <Seo title="Home" />

      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 py-8">
          <div>
            <h1 className="text-4xl font-bold text-primary">
              {parse(content.hero.headline)}
            </h1>
            <h5 className="text-primary">{parse(content.hero.subHeading)}</h5>
            <button class="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded">
              {content.hero.button.text}
            </button>
          </div>
          <h1 className="text-4xl font-bold text-pink-500">VIDEO</h1>
        </div>
      </div>
      <div className="bg-primary border-t-8 border-secondary p-8">
        <div className="container mx-auto">
          <h3 className="text-2xl py-3 text-white">
            {content.hero.quicksLinks.headline}
          </h3>
          <Quicklinks links={content.hero.quicksLinks.links} />
        </div>
      </div>
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
      }
    }
  }
`
