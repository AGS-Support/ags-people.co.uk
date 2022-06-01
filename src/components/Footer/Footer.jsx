import React from "react"
import { Link } from "gatsby"
import Svg from "react-inlinesvg"
import facebookLogo from "../../assets/icons/facebook.svg"
import LinkedInLogo from "../../assets/icons/linkedin.svg"
const Footer = () => {
  const svgProps = {
    width: "24",
    height: "24",
    //style: style,
  }

  //linkedin #0A66C2
  //fb #1877F2
  return (
    <footer className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
              AGS Support concierge service provides an extremely apt and cost
              effective alternative to in House and outsourced agency staffing
              within the supported housing sector. Our highly trained Concierge
              Personnel are “Enhanced” DBS checked and are seasoned veterans of
              the Supported Housing environment.
            </p>
            <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
              © {new Date().getFullYear()} &middot; Built with 💖 by{" "}
              <a href="https://indieridge.com" target="_blank" rel="noreferrer">
                Indie Ridge
              </a>
            </p>
            <div>
              <a
                className="inline-block h-6 mr-8"
                href="https://www.linkedin.com/company/agssupport"
                target="_blank"
                rel="noreferrer"
              >
                <Svg src={LinkedInLogo} fill="#0A66C2" {...svgProps} />
              </a>
              <a
                className="inline-block h-6 mr-8"
                href="https://www.facebook.com/AGSSupportFacilities/"
                target="_blank"
                rel="noreferrer"
              >
                <Svg src={facebookLogo} fill="#1877F2" {...svgProps} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Company</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Pages</h3>
                <ul className="text-sm">
                  <li>
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Legal</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4">
                <h3 className="mb-6 text-lg font-bold font-heading">
                  Resources
                </h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Service
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-500 hover:text-indigo-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="lg:text-center text-sm text-gray-500">
            All rights reserved. © AGS Support
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
