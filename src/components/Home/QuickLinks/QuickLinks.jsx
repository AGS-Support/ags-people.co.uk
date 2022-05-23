import * as React from "react"
import { Link } from "gatsby"
const Quicklinks = ({ headline, links }) => {
  return (
    <section class="quick-links angle-border angle-border-top angle-border-brand">
      <div class="container">
        <div class="content">
          <h2 class="margin-reset">{headline}</h2>
          <ul className="list-reset list-inline">
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link
                    to={link.url}
                    className="text-white underline font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Quicklinks
