import * as React from "react"
const Section = ({ children, background }) => {
  if (background === "dark") {
    background = "primary"
  }
  if (background === "light") {
    background = "tint"
  }
  return (
    <section
      class={`bg-${background} angle-border angle-border-top angle-border-bottom angle-border-${background}`}
    >
      <div className="container">
        <div class="content">{children}</div>
      </div>
    </section>
  )
}

Section.defaultProps = {
  background: "tint",
}

export default Section
