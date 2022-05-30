import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import parse from "html-react-parser"
import Section from "../components/Section"
const WhoWeArePage = ({ data }) => {
  const content = data.wpPage.whoWeAre
  const teamMembers = data.allWpTeamMember.nodes
  const bannnerImage = getImage(content.image?.localFile)

  return (
    <Layout>
      <Seo title="Who We Are" />
      <section>
        <div class="container">
          <div class="content">
            <h1 className="text-center">{content.headline}</h1>
            <p
              className="text-para text-center"
              style={{ maxWidth: "620px", margin: "0px auto" }}
            >
              {parse(content.intro)}
            </p>
            <GatsbyImage image={bannnerImage} className="max-w-full mb-10" />
          </div>
        </div>
      </section>
      {teamMembers.map((teamMember, index) => {
        const profileImage = getImage(teamMember.theTeam.profilePic?.localFile)
        console.log("profileImage", teamMember.profilePic?.localFile)
        if (index === 0) {
          return (
            <Section background="light">
              <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-8 md:gap-2 sm:gap-0">
                <div className="text-center">
                  <GatsbyImage image={profileImage} />
                </div>
                <div key={teamMember.id}>
                  <h1>{teamMember.theTeam.name}</h1>
                  <h2>{teamMember.theTeam.role}</h2>
                  {teamMember.theTeam.profile && (
                    <p className="text-dark">
                      {parse(teamMember.theTeam.profile)}
                    </p>
                  )}
                </div>
              </div>
            </Section>
          )
        }
        return (
          <section>
            <div class="container">
              <div class="content">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-8 md:gap-2 sm:gap-0">
                  <div className="text-center">
                    <GatsbyImage image={profileImage} />
                  </div>
                  <div key={teamMember.id}>
                    <h1>{teamMember.theTeam.name}</h1>
                    <h2>{teamMember.theTeam.role}</h2>
                    {teamMember.theTeam.profile && (
                      <p className="text-dark">
                        {parse(teamMember.theTeam.profile)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </Layout>
  )
}

export default WhoWeArePage

export const query = graphql`
  query WhoWeAreQuery {
    wpPage(tags: { nodes: { elemMatch: { slug: { eq: "who-we-are" } } } }) {
      whoWeAre {
        headline
        intro
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }

    allWpTeamMember {
      nodes {
        theTeam {
          name
          profile
          role
          profilePic {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 200
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
