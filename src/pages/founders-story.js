import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

import Button from "../components/atoms/Button"

import PageHeading from "../components/molecules/PageHeading"

const FoundersStoryPage = ({ data }) => {
  const team = data.allWpTeamMember.nodes[0].theTeam
  const signatureImage = getImage(team.signature?.localFile)
  const profileImage = getImage(team.profilePic?.localFile)
  return (
    <Layout>
      <Seo title="Founders Story" />
      <PageHeading title="Founders Story" className="pb-4 text-center" />
      <section>
        <div className="inner-container">
          {profileImage && (
            <div className="mb-10 text-center">
              <GatsbyImage
                image={profileImage}
                objectFit="contain"
                alt="Profile Image"
                className="rounded-lg"
              />
            </div>
          )}
          <div className="content title">
            <div className="text-dark">{parse(data.wpPage.content)}</div>
          </div>
          {signatureImage && (
            <div>
              <GatsbyImage
                image={signatureImage}
                objectFit="contain"
                alt="Signature"
              />
            </div>
          )}
          <div className="mt-10 text-right">
            <Button to="/our-sectors" variant="tertiary">
              See our services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FoundersStoryPage

export const query = graphql`
  query FoundersQuery {
    wpPage(tags: { nodes: { elemMatch: { name: { eq: "founders-story" } } } }) {
      content
    }

    allWpTeamMember(filter: { theTeam: { founder: { eq: true } } }) {
      nodes {
        theTeam {
          signature {
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
          profilePic {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 300
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
