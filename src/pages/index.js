import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"

import Title from "../components/atoms/Title"

import HomeTestimonials from "../components/molecules/HomeTestimonials"
import LogoGrid from "../components/molecules/LogoGrid"
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
      <section className="md:py-10">
        <div className="container">
          <div className="content">
            <Title className="text-center" variant="h2">
              {pageData.customerLogos.headline}
            </Title>
            <LogoGrid />
          </div>
        </div>
      </section>
      {/* What Makes AGS Special */}
      <Section background="light">
        <WhatMakesAGSSpecial
          headline={pageData.whatMakesAgsSpecial.headline}
          featureList={pageData.whatMakesAgsSpecial.feature}
          buttons={pageData.whatMakesAgsSpecial.buttons}
        />
      </Section>
      {/* Services */}
      <section className="md:py-10">
        <div className="container">
          <div className="content">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24">
              <ServiceBanner {...pageData.services.leftService} />
              <ServiceBanner {...pageData.services.rightService} />
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <CallToAction {...pageData.callToAction} />
      {/* Customer Logos & Testiominials Section */}
      <Section background="white">
        {/* Testimonials */}
        <div className="content">
          <HomeTestimonials
            headline={pageData.testimonials.headline}
            testimonials={pageData.testimonials.testimonials}
            background="white"
          />
        </div>
      </Section>
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
