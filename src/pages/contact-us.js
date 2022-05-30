import React from "react"

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
const ContactUs = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <section>
        <div className="inner-container">
          <div className="content title">
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.GATSBY_CAPTCHA_V3_key}
            >
              <h1 className="text-center">We’re Here To Support You, 24/7</h1>
              <p className="text-dark text-center">
                Whether you’re looking for short-term support staff or a
                comprehensive concierge service, our seasoned team at AGS is
                ready to help you. Not exactly sure what you need? Feel free to
                call us—we’ll be most happy to discuss it with you & tell you
                exactly how we can help.
              </p>
              <ContactForm />
            </GoogleReCaptchaProvider>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default ContactUs
