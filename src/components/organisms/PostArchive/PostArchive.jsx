import React from "react"
import PropTypes from "prop-types"
import Masonry from "react-masonry-css"

import { VerticalCard } from "../Cards"

const PostArchive = ({ posts, className }) => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    720: 1,
  }
  if (posts.length < 1) return null
  return (
    <section className={className}>
      <div className="container">
        <div className="content">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map(post => {
              const bodyText = post.posts?.summary
                ? post.posts?.summary
                : post.excerpt
              return (
                <div className="mb-10" key={post.uri}>
                  <VerticalCard
                    image={post.featuredImage}
                    eyebrow={post.date}
                    title={post.title}
                    bodyText={bodyText}
                    linkText="Read more"
                    url={post.uri}
                  />
                </div>
              )
            })}
          </Masonry>
        </div>
      </div>
    </section>
  )
}
PostArchive.defaultProps = {
  posts: [],
  className: "",
}

PostArchive.propTypes = {
  posts: PropTypes.array,
  className: PropTypes.string,
}

export default PostArchive
