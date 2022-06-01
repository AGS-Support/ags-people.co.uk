import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useClients } from "../../hooks/use-clients"

const Partners = ({ partners, cols, colsDesktop }) => {
  const clients = useClients()
  console.log("partners", partners)
  console.log("clients", clients)
  return (
    <>
      {clients.map((client, index) => {
        return (
          <>
            <h3 className="text-center margin-reset">{client.clients.title}</h3>
            <div
              className={`grid grid-cols-${cols} md:grid-cols-${colsDesktop}  gap-8 brands mb-10`}
            >
              {client.clients.logos.map((logo, index) => {
                var logoImage = getImage(logo.localFile)
                return (
                  <div className="brands__item">
                    <span>
                      <GatsbyImage image={logoImage} />
                    </span>
                  </div>
                )
              })}
            </div>
          </>
        )
      })}
    </>
  )
}
Partners.defaultProps = {
  cols: 3,
  colsDesktop: 5,
}

export default Partners
