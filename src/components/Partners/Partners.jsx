import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useClients } from "../../hooks/use-clients"

const Partners = ({ cols, colsDesktop }) => {
  const clients = useClients()
  return (
    <>
      {clients.map((client, index) => {
        const clientDetails = client.clients
        return (
          <>
            <h3 className="text-center margin-reset">{clientDetails.title}</h3>
            <div
              className={`grid grid-cols-${cols} md:grid-cols-${colsDesktop}  gap-8 brands mb-10`}
            >
              {clientDetails.logos.map((logo, index) => {
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
