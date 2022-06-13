import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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

Categories.defaultProps = {
  categories: [],
}

Categories.propTypes = {
  categories: PropTypes.array,
}

export default Categories
