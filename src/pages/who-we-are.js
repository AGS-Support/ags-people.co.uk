import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import PageHeading from "../components/molecules/PageHeading"

const WhoWeArePage = ({ data }) => {
  const content = data.wpPage.whoWeAre
  const teamMembers = data.allWpTeamMember.nodes
  const bannnerImage = getImage(content.image?.localFile)

  return (
    <Layout>
      <Seo title="Who We Are" />
      <PageHeading
        title={content.headline}
        intro={content.intro}
        className="text-center mb-0"
      />
      <section className="mt-0 pt-0">
        <div class="container">
          <div class="content title">
            <GatsbyImage image={bannnerImage} className="max-w-full mb-10" />
          </div>
        </div>
      </section>

      {teamMembers.map((teamMember, index) => {
        const profileImage = getImage(teamMember.theTeam.profilePic?.localFile)
        console.log("profileImage", teamMember.profilePic?.localFile)
        if (index === 0) {
          return (
            <>
              <Section background="tint">
                <div className="grid grid-cols-1 md:grid-cols-3  lg:gap-8 md:gap-2 sm:gap-0">
                  <div>
                    <GatsbyImage image={profileImage} />
                  </div>
                  <div className="col-span-2" key={teamMember.id}>
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
              <div className="mt-10">&nbsp;</div>
            </>
          )
        }
        return (
          <>
            <Section background={`${index % 2 === 0 ? "tint" : "white"}`}>
              <div class="container">
                <div class="content">
                  <div className="grid grid-cols-1 md:grid-cols-3  gap-0 md:gap-8">
                    <div
                      className={`order-${index % 2 === 0 ? "first" : "last"} `}
                    >
                      <GatsbyImage image={profileImage} />
                    </div>
                    <div className="col-span-2" key={teamMember.id}>
                      <h1 className="margin-reset">
                        {teamMember.theTeam.name}
                      </h1>
                      <h2 className="margin-reset">
                        {teamMember.theTeam.role}
                      </h2>
                      {teamMember.theTeam.profile && (
                        <p className="text-dark">
                          {parse(teamMember.theTeam.profile)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            <div className="mt-10">&nbsp;</div>
          </>
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

    allWpTeamMember(sort: { fields: menuOrder, order: ASC }) {
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
