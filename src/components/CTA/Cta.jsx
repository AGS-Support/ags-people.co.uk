import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

const Cta = ({ background, headline, content, button }) => {
  console.log("background", background)
  console.log("headline", headline)
  console.log("content", content)
  console.log("button", button)
  return (
    <section
      class={`bg-${
        background === "Dark" ? "primary" : "tint"
      } angle-border angle-border-top angle-border-bottom angle-border-${
        background === "Dark" ? "primary" : "tint"
      }`}
    >
      <div class="inner-container">
        <div class="content">
          <h2
            className={`text-center font-bold text-${
              background === "Dark" ? "white" : "primary"
            }`}
          >
            {headline}
          </h2>
          <p
            className={`text-center text-${
              background === "Dark" ? "white" : "dark"
            }`}
          >
            {content && parse(content)}
          </p>
          {button?.link === "Calendly" ? (
            <div className="text-center mt-16">
              <a
                href={`${process.env.GATSBY_CALENDLY_URL}`}
                className="button text-center text-white bg-secondary border-2 border-secondary"
              >
                {button.text}
              </a>
            </div>
          ) : null}

          {button?.link === "Internal Page" ? (
            <div
              className={`text-center text-bold text-${
                background === "Dark" ? "white" : "primary"
              }`}
            >
              <Link
                to={button.internalUrl.uri}
                className={`text-${
                  background === "Dark" ? "white" : "primary"
                } font-bold uppercase underline`}
              >
                {button.text}
              </Link>
              →
            </div>
          ) : null}
          {button?.link === "External URL" ? (
            <div className="text-center text-bold text-white">
              <a
                href={button.externalUrl}
                className="text-white"
                traget="_blank"
              >
                {button.text}
              </a>
              →
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
export default Cta
