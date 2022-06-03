import React from "react"
import { Link } from "gatsby"
const Categories = ({ categories }) => {
  if (categories.length === 0) {
    return null
  }
  return (
    <>
      {categories.map((category, index) => {
        if (category.name === "Uncategorized") {
          return null
        }
        return (
          <span>
            {index === 0 ? " in " : " "}
            <Link to={`/categories/${category.slug}`} className="underline">
              {category.name}
            </Link>
          </span>
        )
      })}
    </>
  )
}

export default Categories
