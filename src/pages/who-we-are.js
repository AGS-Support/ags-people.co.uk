import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import parse from "html-react-parser"

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
            <GatsbyImage image={bannnerImage} className="max-w-full" />
            {teamMembers.map(teamMember => {
              console.log("teammember", teamMember)
              return <li key={teamMember.id}>{teamMember.theTeam.name}</li>
            })}
          </div>
        </div>
      </section>
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
            id
          }
        }
      }
    }
  }
`
