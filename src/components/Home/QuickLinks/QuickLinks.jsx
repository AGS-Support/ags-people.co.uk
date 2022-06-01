import * as React from "react"
import { Link } from "gatsby"
import { useQuickLinks } from "../../../hooks/use-quicklinks"
const Quicklinks = ({ headline, links }) => {
  const services = useQuickLinks()

  return (
    <section className="quick-links angle-border angle-border-top angle-border-brand">
      <div className="container">
        <div className="content ">
          <h2 className="pt-10">{headline}</h2>
          <div className="lg:flex lg:justify-between">
            <ul className="list-reset list-inline">
              {services.map(service => {
                return (
                  <li key={service.slug} className="mb-4 lg:mb-0">
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
            <div className="mb-10 md:mb-0 mt-10 lg:mt-0">
              <Link
                to="#0"
                className="bg-secondary text-white font-bold p-4 rounded border-2 border-secondary"
              >
                Call Us Now
              </Link>
              <Link
                to="#0"
                className="bg-primary text-white border-2 border-white font-bold p-4 rounded ml-5"
              >
                Book A Free Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Quicklinks
