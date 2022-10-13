import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Button from "../components/atoms/Button"

import PageHeading from "../components/molecules/PageHeading"

const WhoWeArePage = ({ data }) => {
  const content = data.wpPage.whoWeAre
  const teamMembers = data.allWpTeamMember.nodes
  const bannnerImage = getImage(content.image?.localFile)
  const seo = data.wpPage.seo
  return (
    <Layout>
      <Seo seo={seo} />
      <PageHeading
        title={content.headline}
        intro={content.intro}
        className="text-center mb-0"
      />
      <section className="mt-0 pt-0">
        <div className="container">
          <div className="content title text-center">
            <GatsbyImage
              image={bannnerImage}
              className="max-w-full mb-10"
              alt="banner image"
            />
          </div>
        </div>
      </section>

      {teamMembers.map((teamMember, index) => {
        const profileImage = getImage(teamMember.theTeam.profilePic?.localFile)
        if (index === 0) {
          return (
            <Section background="tint" key={`team-member-section-${index}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 ">
                <div className="w-[100%] md:w-auto mx-auto">
                  <GatsbyImage
                    alt={teamMember.theTeam.name}
                    image={profileImage}
                    className="rounded-lg  w-[50%]  md:w-[100%]"
                  />
                </div>
                <div className="col-span-2 mt-6 md:mt-0" key={teamMember.id}>
                  <h1>{teamMember.theTeam.name}</h1>
                  <h2>{teamMember.theTeam.role}</h2>
                  {teamMember.theTeam.profile && (
                    <span className="text-dark">
                      {parse(teamMember.theTeam.profile)}
                    </span>
                  )}
                  {teamMember.theTeam.founder && (
                    <Button to="/founders-story" variant="tertiary">
                      Founders Story
                    </Button>
                  )}
                </div>
              </div>
            </Section>
          )
        }
        return (
          <Section
            background={`${index % 2 === 0 ? "tint" : "white"}`}
            key={`team-member-section-${index}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3  gap-0 md:gap-2">
              <div
                className={`w-[100%] md:w-auto  mx-auto md:order-${
                  index % 2 === 0 ? "first" : "last"
                } `}
              >
                <GatsbyImage
                  alt={teamMember.theTeam.name}
                  image={profileImage}
                  className="rounded-lg  w-[50%]  md:w-[100%]"
                />
              </div>
              <div className="col-span-2 mt-6 md:mt-0" key={teamMember.id}>
                <h1 className="margin-reset">{teamMember.theTeam.name}</h1>
                <h2 className="margin-reset">{teamMember.theTeam.role}</h2>
                {teamMember.theTeam.profile && (
                  <span className="text-dark">
                    {parse(teamMember.theTeam.profile)}
                  </span>
                )}
                {teamMember.theTeam.founder && (
                  <Link to="/founder-story">Founders Story</Link>
                )}
              </div>
            </div>
          </Section>
        )
      })}
    </Layout>
  )
}

export default WhoWeArePage

export const query = graphql`
  query WhoWeAreQuery {
    wpPage(tags: { nodes: { elemMatch: { slug: { eq: "who-we-are" } } } }) {
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
          founder
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
