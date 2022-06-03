import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Title from "../../atoms/Title"
import Categories from "../../atoms/Categories"

const PostHeading = ({
  breadcrumb,
  title,
  summary,
  date,
  categories,
  className,
}) => {
  return (
    <section clasName={className}>
      <div className="inner-container">
        <Link to="/blog" rel="prev">
          {breadcrumb}
        </Link>
        <Title variant="h1">{parse(title)}</Title>
        {summary && <p className="text-para bump">{parse(summary)}</p>}
        <p>
          Posted: {date}
          <Categories categories={categories} />
        </p>
      </div>
    </section>
  )
}

PostHeading.defaultProps = {
  breadcrumb: "← Blog Home",
  title: "Please add a title",
  summary: "",
  date: "",
  categories: [],
  className: "",
}

export default PostHeading
