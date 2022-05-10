import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 py-8">
        <div>
          <h1 className="text-4xl font-bold text-primary">
            Providing specialist supported housing resident management.
          </h1>
          <h5 className="text-primary">
            We offer 24-hour support, 365 days a year.
          </h5>
          <button class="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded">
            More about our services
          </button>
        </div>
        <h1 className="text-4xl font-bold text-pink-500">VIDEO</h1>
      </div>
    </div>
    <div className="bg-primary border-t-8 border-secondary p-8 skew-x-12">
      <div className="container mx-auto">
        <h5 className="text-white">What do you need?</h5>
      </div>
    </div>
  </Layout>
)

export default IndexPage
