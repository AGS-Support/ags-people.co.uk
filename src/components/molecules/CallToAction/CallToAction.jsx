import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"

import Title from "../../atoms/Title"
import Link from "../../atoms/Link"

const CallToAction = ({ background, headline, content, button, className }) => {
  if (background === "Dark") {
    className = `bg-brand angle-border angle-border-top angle-border-bottom angle-border-${
      background === "Dark" ? "primary" : "tint"
    }`
  } else {
    className = `bg-tint angle-border angle-border-top angle-border-bottom angle-border-${
      background === "Dark" ? "primary" : "tint"
    }`
  }
  return (
    <section className={className}>
      <div className="inner-container">
        <div className="content">
          <Title
            variant="h2"
            className={`text-center font-bold text-${
              background === "Dark" ? "white" : "primary"
            }`}
          >
            {parse(headline)}
          </Title>
          <span
            className={`text-center text-${
              background === "Dark" ? "white" : "dark"
            }`}
          >
            {content && parse(content)}
          </span>
          {button?.link === "Calendly" ? (
            <div className="text-center mt-16">
              <Link type="calendly">{button.text}</Link>
            </div>
          ) : null}

          {button?.link === "Internal Page" ? (
            <div className="text-center">
              <Link
                type="internal"
                to={button.internalUrl.uri}
                className={`font-bold text-lg underline text-${
                  background === "Dark" ? "white" : "primary"
                }`}
              >
                {button.text}
              </Link>
            </div>
          ) : null}
          {button?.link === "External URL" ? (
            <div className="text-center">
              <Link
                type="internal"
                to={button.externalUrl}
                className={`font-bold  :first-letter before:content-[ →] underline text-${
                  background === "Dark" ? "white" : "primary"
                }`}
              >
                {button.text}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

CallToAction.defaultProps = {
  background: "",
  headline: "",
  content: "",
  button: {},
  className: "",
}

CallToAction.propTypes = {
  background: PropTypes.string,
  headline: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.object,
  className: PropTypes.string,
}

export default CallToAction
