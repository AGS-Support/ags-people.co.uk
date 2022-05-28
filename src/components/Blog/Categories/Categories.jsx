import React from "react"
import { Link } from "gatsby"

const PostCategories = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => {
        if (category.name === "Uncategorized") {
          return
        }
        if (index === 0) {
          return (
            <span>
              &nbsp; in{" "}
              <Link to={`categories/${category.slug}`}>{category.name}</Link>
            </span>
          )
        }
        return <Link to={`categories/${category.slug}`}>{category.name}</Link>
      })}
    </>
  )
}

export default PostCategories
