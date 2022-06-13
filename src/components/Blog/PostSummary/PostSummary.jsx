import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const PostSummary = ({ post }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-tint pb-8">
        <div className="relative h-60 mb-6">
          {featuredImage?.data && (
            <GatsbyImage
              className="w-full h-full object-cover "
              image={featuredImage.data}
              alt={featuredImage.alt}
            />
          )}
        </div>
        <div className="p-4">
          <span className="inline-block text-xs font-bold text-dark">
            {post.date}
          </span>
          <h2 className="mb-2 text-2xl font-bold font-heading">
            <Link to={post.uri} itemProp="url">
              <span itemProp="headline">{parse(post.title)}</span>
            </Link>
          </h2>
          <p
            itemProp="description"
            className="mb-4 text-lg text-dark leading-loose"
          >
            {post.posts?.summary
              ? parse(post.posts?.summary)
              : parse(post.excerpt)}
          </p>
          <Link to={post.uri} className="text-primary font-bold">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}

PostSummary.defaultProps = {
  post: {},
}

PostSummary.propTypes = {
  post: PropTypes.object,
}

export default PostSummary
