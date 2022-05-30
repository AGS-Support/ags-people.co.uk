import React from "react"
import { Link } from "gatsby"
import { HashtagIcon } from "@heroicons/react/solid"
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
              <Link to={`/categories/${category.slug}`} className="underline">
                {category.name}
              </Link>
            </span>
          )
        }
        return (
          <>
            {",  "}
            <Link to={`/categories/${category.slug}`} className="underline">
              {category.name}
            </Link>
          </>
        )
      })}
    </>
  )
}

export default PostCategories
