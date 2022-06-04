import React from "react"
import { VerticalCard } from "../Cards"
const PostArchive = ({ posts, className }) => {
  if (posts.length < 1) return null
  return (
    <section className={className}>
      <div className="container">
        <div className="content">
          <div className="flex flex-wrap -mx-4 mb-12">
            {posts.map(post => {
              const bodyText = post.posts?.summary
                ? post.posts?.summary
                : post.excerpt
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                  <VerticalCard
                    image={post.featuredImage}
                    eyebrow={post.date}
                    title={post.title}
                    bodyText={bodyText}
                    linkText="Read More"
                    url={post.uri}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
PostArchive.defaultProps = {
  posts: [],
  className: "",
}
export default PostArchive
