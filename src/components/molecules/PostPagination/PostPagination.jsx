import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import parse from "html-react-parser"

const PostPagination = ({ next, previous, hideTopText }) => {
  return (
    <nav className="blog-post-nav mt-16 flex justify-between">
      {previous ? (
        <div style={{ maxWidth: "48%" }}>
          <Link to={previous.uri} rel="prev">
            {!hideTopText && (
              <p className="text-dark margin-reset text-left">Previous</p>
            )}
            <div className="inline-flex">
              <span>←&nbsp;&nbsp;</span>
              <span>{parse(previous.title)}</span>
            </div>
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth: "48%" }}>
          <div className="inline-flex"></div>
        </div>
      )}

      {next && (
        <div className="text-right" style={{ maxWidth: "48%" }}>
          <Link to={next.uri} rel="prev">
            {!hideTopText && (
              <p className="text-dark margin-reset text-right">Next</p>
            )}
            <div className="inline-flex">
              <span>{parse(next.title)}</span>
              <span>&nbsp;&nbsp;→</span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  )
}

PostPagination.propTypes = {
  next: PropTypes.object,
  previous: PropTypes.object,
}

export default PostPagination
