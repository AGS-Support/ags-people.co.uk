import * as React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Quicklinks from "../components/Quicklinks"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data }) => {
  const content = data.wpPage.homepage
  const leftServiceImage = getImage(
    content.services.leftService.image?.localFile
  )
  const rightServiceImage = getImage(
    content.services.rightService.image?.localFile
  )
  return (
    <Layout>
      <Seo title="Home" />

      <div className="container mx-auto">
        <div className="grid grid-cols-8 gap-8 py-8">
          <div className="col-span-3 bg-slate-50">
            <h1 className="text-4xl font-bold text-primary">
              {parse(content.hero.headline)}
            </h1>
            <h5 className="text-primary">{parse(content.hero.subHeading)}</h5>
            <button className="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded">
              {content.hero.button.text}
            </button>
          </div>
          <div className="col-span-5 bg-pink-50">
            <h1 className="text-4xl font-bold text-pink-500">VIDEO</h1>
          </div>
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
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 gap-48">
            <div id="left-service">
              <GatsbyImage image={leftServiceImage} alt="Left Service" />
              <div className="">
                <h3 className="text-4xl py-3 text-primary">
                  {content.services.leftService.title}
                </h3>
                <p className="py-3">
                  {parse(content.services.leftService.content)}
                </p>
                <div className="py-3">
                  <Link
                    to={content.services.leftService.buttonUrl}
                    className="text-primary bg-slate-100 hover:bg-slate/80 text-white font-bold py-4 px-4 rounded"
                  >
                    {content.services.leftService.buttonText}
                  </Link>
                </div>
              </div>
            </div>
            <div id="right-service">
              <GatsbyImage image={rightServiceImage} alt="Left Service" />
              <div className="">
                <h3 className="text-4xl py-3 text-primary">
                  {content.services.rightService.title}
                </h3>
                <p className="py-3">
                  {parse(content.services.rightService.content)}
                </p>
                <div className="py-3">
                  <Link
                    to={content.services.rightService.buttonUrl}
                    className="text-primary bg-slate-100 hover:bg-slate/80 text-white font-bold py-4 px-4 rounded"
                  >
                    {content.services.rightService.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto">
          <h3 className="text-4xl py-3 text-primary">
            {content.customerLogos.headline}
          </h3>

          <h3 className="text-4xl py-3 mb-6 text-primary">
            What clients say...
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 lg:gap-24 md:gap-12 sm:gap-0">
            <div className="border-solid border-2 border-gray-300 p-8 bg-white mb-26 shadow-md">
              <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
                <h5 className="text-lg font-bold">Housing Manager YMCA</h5>
                <h5 className="text-primary text-xl text-right">⭐⭐⭐⭐⭐</h5>
              </div>
              <p>
                “Our YMCA is a Supported housing project with 73 bed spaces. 22
                of these are high support for complex and chaotic need and the
                remainder are low support. We are staffed 24 hours a day and use
                a combination of our own Support workers and AGS Support staff
                to staff the building. AGS Support staff are used with or
                without our own staff to cover mainly nights and some adhoc day
                shifts at short notice.”
              </p>
            </div>
            <div className="border-solid border-2 border-gray-300 p-8 bg-white shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pb-6">
                <h5 className="text-lg font-bold">Housing Manager YMCA</h5>
                <h5 className="text-primary text-xl text-right">⭐⭐⭐⭐⭐</h5>
              </div>
              <p>
                “Our YMCA is a Supported housing project with 73 bed spaces. 22
                of these are high support for complex and chaotic need and the
                remainder are low support. We are staffed 24 hours a day and use
                a combination of our own Support workers and AGS Support staff
                to staff the building. AGS Support staff are used with or
                without our own staff to cover mainly nights and some adhoc day
                shifts at short notice.”
              </p>
            </div>
            <div className="border-solid border-2 border-gray-300 p-8 bg-white shadow-md">
              <div className="grid grid-cols-2  md:grid-cols-2 gap-4 pb-6">
                <h5 className="text-lg font-bold">Housing Manager YMCA</h5>
                <h5 className="text-primary text-xl text-right">⭐⭐⭐⭐⭐</h5>
              </div>
              <p>
                “Our YMCA is a Supported housing project with 73 bed spaces. 22
                of these are high support for complex and chaotic need and the
                remainder are low support. We are staffed 24 hours a day and use
                a combination of our own Support workers and AGS Support staff
                to staff the building. AGS Support staff are used with or
                without our own staff to cover mainly nights and some adhoc day
                shifts at short notice.”
              </p>
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
  }
`
