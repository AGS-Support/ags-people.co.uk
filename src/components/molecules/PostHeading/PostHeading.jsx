import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"

import Button from "../../atoms/Button"
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
        <Button to="/blog" variant="tertiary" arrowPosition="left" className="">
          {breadcrumb}
        </Button>
        <p className="text-para text-sm mt-3">
          {date}
          <Categories categories={categories} />
        </p>
        <Title variant="h1" className="mt-5">
          {parse(title)}
        </Title>
        {summary && <p className="text-para bump">{parse(summary)}</p>}
      </div>
    </section>
  )
}

PostHeading.defaultProps = {
  breadcrumb: "Blog Home",
  title: "Please add a title",
  summary: "",
  date: "",
  categories: [],
  className: "",
}

PostHeading.propTypes = {
  breadcrumb: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  date: PropTypes.string,
  categories: PropTypes.array,
  className: PropTypes.string,
}

export default PostHeading
