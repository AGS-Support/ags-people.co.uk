import * as React from "react"
const Section = ({ children, background }) => {
  return (
    <section
      class={`bg-${
        background === "dark" ? "primary" : "tint"
      } angle-border angle-border-top angle-border-bottom angle-border-${
        background === "dark" ? "primary" : "tint"
      }`}
    >
      <div className="container">
        <div class="content">{children}</div>
      </div>
    </section>
  )
}
export default Section
