import * as React from "react"
import { Link } from "gatsby"
import { useQuickLinks } from "../../../hooks/use-quicklinks"
const Quicklinks = ({ headline, links }) => {
  const services = useQuickLinks()
  console.log("quick link nodes", services)
  return (
    <section class="quick-links angle-border angle-border-top angle-border-brand">
      <div class="container">
        <div class="content">
          <h2 class="margin-reset">{headline}</h2>
          <ul className="list-reset list-inline">
            {services.map(service => {
              return (
                <li key={service.slug}>
                  <Link
                    to={`services/${service.slug}`}
                    className="text-white underline font-normal"
                  >
                    {service.services.title}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="text-right">
            <Link
              to="#0"
              className="bg-secondary text-white font-bold p-4 rounded"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Quicklinks
