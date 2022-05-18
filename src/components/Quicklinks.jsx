import * as React from "react"
import { Link } from "gatsby"
const Quicklinks = ({ links }) => {
  return (
    <ul className="list-reset list-inline">
      {links.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url} className="text-white underline font-normal">
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Quicklinks
