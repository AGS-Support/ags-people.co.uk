import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Testimonials from "../components/molecules/Testimonials"
import CustomerLogos from "../components/molecules/CustomerLogos"
import WhatMakesAGSSpecial from "../components/molecules/WhatMakesAGSSpecial"
import CallToAction from "../components/molecules/CallToAction"

import Banner from "../components/organisms/Banner"
import Quicklinks from "../components/organisms/QuickLinks"
import ServiceBanner from "../components/organisms/ServiceBanner"

const IndexPage = ({ data }) => {
  const homepage = data.wpPage.homepage
  const pageData = {
    seo: data.wpPage.seo,
    hero: homepage.hero,
    quickLinks: homepage.hero.quicksLinks,
    services: homepage.services,
    customerLogos: homepage.customerLogos,
    testimonials: homepage.testimonials,
    featureList: homepage.whatMakesAgsSpecial.feature,
    whatMakesAgsSpecial: homepage.whatMakesAgsSpecial,
    callToAction: homepage.callToAction,
  }

  return (
    <Layout>
      <Seo title="Home" seo={pageData.seo} />
      {/* Hero */}
      <Banner {...pageData.hero} />
      <Quicklinks {...pageData.quickLinks} />
      {/* Services */}
      <section>
        <div className="container">
          <div className="content">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
              <ServiceBanner {...pageData.services.leftService} />
              <ServiceBanner {...pageData.services.rightService} />
            </div>
          </div>
        </div>
      </section>
      {/* Customer Logos & Testiominials Section */}
      <Section>
        {/* Customer Logos */}
        <CustomerLogos
          headline={pageData.customerLogos.headline}
          logos={pageData.customerLogos.logos}
        />
        {/* Testimonials */}
        <div className="content">
          <Testimonials
            headline={pageData.testimonials.headline}
            testimonials={pageData.testimonials.testimonials}
          />
        </div>
      </Section>
      {/* What Makes AGS Special */}
      <section>
        <div className="container">
          <div className="content">
            <WhatMakesAGSSpecial
              headline={pageData.whatMakesAgsSpecial.headline}
              featureList={pageData.whatMakesAgsSpecial.feature}
              buttons={pageData.whatMakesAgsSpecial.buttons}
            />
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <CallToAction {...pageData.callToAction} />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query HomePageQuery {
    wpPage(isFrontPage: { eq: true }) {
      ...seoFields
      ...heroFields
      ...serviceFields
      ...whatMakesAgsSpecialFields
      ...customerLogoFields
      ...testominialFields
      ...callToActionFields
    }
  }
`
