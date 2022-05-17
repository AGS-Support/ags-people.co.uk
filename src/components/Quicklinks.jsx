import * as React from "react"
import { Link } from "gatsby"
const Quicklinks = ({ links }) => {
  return (
    <div className="quicklinks">
      <ul className="inline-flex">
        {links.map(link => {
          return (
            <li className="pr-6" key={link.id}>
              <Link to={link.url} className="text-white underline font-normal">
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Quicklinks
