import * as React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Title from "../../atoms/Title/Title"
import Button from "../../atoms/Button"
import { useQuickLinks } from "../../../hooks/use-quicklinks"
const Quicklinks = ({ headline, links }) => {
  const services = useQuickLinks()

  return (
    <section className="quick-links angle-border angle-border-top angle-border-brand">
      <div className="container">
        <div className="content ">
          <h2 className="pt-10">{parse(headline)}</h2>
          <div className="block md:flex md:justify-between">
            <ul className="list-reset list-inline">
              {services.map(service => {
                return (
                  <li key={service.slug} className="mb-4 md:mb-0">
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
            <div className="mb-5 mt-10 md:mb-0 md:mt-0 md:flex md:justify-between">
              <div className="order-2">
                <Button
                  to={`${process.env.GATSBY_CALENDLY_URL}`}
                  variant="white-outline"
                  type="calendly"
                >
                  Book a free call
                </Button>
              </div>

              <div className="order-1">
                <Button to="contact-us" variant="secondary" size="md">
                  Call us now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Quicklinks
