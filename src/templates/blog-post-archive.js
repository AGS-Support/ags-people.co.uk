import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-xl lg:max-w-2xl mx-auto mb-16 text-center">
            <span class="text-xs font-semibold text-indigo-500 uppercase">
              Lorem ipsum
            </span>
            <h2 class="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p class="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
              Test Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
          </div>
          <div class="flex flex-wrap -mx-4 mb-12">
            {posts.map(post => {
              const title = post.title
              const featuredImage = {
                data: post.featuredImage?.node?.localFile?.childImageSharp
                  ?.gatsbyImageData,
                alt: post.featuredImage?.node?.alt || ``,
              }
              console.log("featured image", featuredImage)
              return (
                <>
                  <div
                    key={post.uri}
                    class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                  >
                    <div class="p-6 bg-gray-50 rounded-lg">
                      <div class="relative h-40 mb-6">
                        {featuredImage?.data && (
                          <GatsbyImage
                            className="w-full h-full object-cover rounded-lg"
                            image={featuredImage.data}
                            alt={featuredImage.alt}
                          />
                        )}
                      </div>
                      <span class="inline-block text-xs font-bold text-indigo-500">
                        {post.date}
                      </span>
                      <h2 class="mb-2 text-2xl font-bold font-heading">
                        <Link to={post.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      </h2>
                      <p
                        itemProp="description"
                        class="mb-4 text-lg text-gray-500 leading-loose"
                      >
                        {parse(post.excerpt)}
                      </p>

                      <Link
                        to={post.uri}
                        itemProp="url"
                        className="flex items-center text-lg font-bold text-indigo-500 hover:text-indigo-700"
                      >
                        <span>Read more</span>
                        <span>
                          <svg
                            class="ml-1 w-5 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div class="text-center">
            <a
              class="px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
              href="#"
            >
              View More Articles
            </a>
          </div>
        </div>
      </section>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
            </li>
          )
        })}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "DD MMMM , YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  }
`
