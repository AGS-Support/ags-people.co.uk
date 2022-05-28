import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

const Cta = ({ background, headline, content, button }) => {
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
            className={`text-center text-${
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
            {parse(content)}
          </p>
          {button.link === "Calendly" ? (
            <div className="text-center mt-16">
              <Link
                to="#0"
                className="bg-secondary mx-auto  text-white font-bold p-4 rounded"
              >
                {button.text}
              </Link>
            </div>
          ) : null}

          {button.link === "Internal Page" ? (
            <div
              className={`text-center text-bold text-${
                background === "Dark" ? "white" : "primary"
              }`}
            >
              <Link
                to={button.internalUrl.uri}
                className={`text-${
                  background === "Dark" ? "white" : "primary"
                }`}
              >
                {button.text}
              </Link>
              →
            </div>
          ) : null}
          {button.link === "External URL" ? (
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
