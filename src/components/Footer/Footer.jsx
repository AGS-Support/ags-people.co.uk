import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Svg from "react-inlinesvg"
import facebookLogo from "../../assets/icons/facebook.svg"
import LinkedInLogo from "../../assets/icons/linkedin.svg"

import flogo1 from "../../assets/images/footer-logo-1.png"
import flogo2 from "../../assets/images/footer-logo-2.png"
import flogo3 from "../../assets/images/footer-logo-3.png"

import Section from "../../components/Section/Section"

import { useQuickLinks } from "../../hooks/use-quicklinks"

const Footer = () => {
  const services = useQuickLinks()
  const menu = [
    { name: "Team", link: "/who-we-are" },
    { name: "Customer Stories", link: "/customer-stories" },
    { name: "FAQ", link: "/faq" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blog", link: "/blog" },
  ]
  const svgProps = {
    width: "24",
    height: "24",
    //style: style,
  }

  //linkedin #0A66C2
  //fb #1877F2
  return (
    <footer>
      <section className="bg-header angle-border angle-border-top  angle-border-header py-10">
        <div class="container content">
          <div className="grid text-center md:text-left grid-cols-2 md:grid-cols-5">
            <div className="">
              <div className="text-dark font-bold">Head Office</div>
              <div className="text-dark font-bold">(South)</div>
              <div className="text-dark">
                Suite 242
                <br />
                80 High Street
                <br />
                Winchester
                <br />
                Hampshire
                <br />
                SO23 9AT
              </div>
            </div>
            <div className="">
              <div className="text-dark font-bold">Head Office</div>
              <div className="text-dark font-bold">(South)</div>
              <div className="text-dark">
                Suite 242
                <br />
                80 High Street
                <br />
                Winchester
                <br />
                Hampshire
                <br />
                SO23 9AT
              </div>
            </div>
            <div className="">
              <div className="text-dark font-bold">Head Office</div>
              <div className="text-dark font-bold">(South)</div>
              <div className="text-dark">
                Suite 242
                <br />
                80 High Street
                <br />
                Winchester
                <br />
                Hampshire
                <br />
                SO23 9AT
              </div>
            </div>
            <div className="text-dark">
              <div className="font-bold">Head Office</div>
              <div className="font-bold">(South)</div>
              <div className="">
                Suite 242
                <br />
                80 High Street
                <br />
                Winchester
                <br />
                Hampshire
                <br />
                SO23 9AT
              </div>
            </div>
            <div className="text-dark">
              <div className="font-bold">Contact</div>
              <div className="">0845 0523597</div>
              <div>info@agssupport.co.uk</div>
              <div className="mt-5">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
            <div className="text-para">
              AGS Support concierge service provides an extremely apt and cost
              effective alternative to in House and outsourced agency staffing
              within the supported housing sector. Our highly trained Concierge
              Personnel are “Enhanced” DBS checked and are seasoned veterans of
              the Supported Housing environment.
            </div>

            <div className="text-dark">
              <div className="font-bold">Services</div>
              <ul>
                {services.map(service => (
                  <li className="border-b-2 border-slate py-4">
                    <Link to={service.uri}>{service.services.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-dark">
              <div className="font-bold">AGS Support</div>
              <ul>
                {menu.map((item, index) => {
                  return (
                    <Link key={`desktop-menu-item-${index}`} to={item.link}>
                      <li className="border-b-2 border-slate py-4">
                        {item.name}
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="container content">
          <div className="flex justify-between text-para">
            <div className="" style={{ minWidth: "50%" }}>
              <img src={flogo1} className="inline max-h-[80px] mr-8" />
              <img src={flogo2} className="inline max-h-[80px] mr-8" />
              <img src={flogo3} className="inline max-h-[80px]" />
            </div>
            <div className="text-right">
              VAT No. GB 315333630 Company No. 11648687
              <br /> Registered Address: 24 Park Rd S, Havant PO9 1HB, United
              Kingdom
              <br /> © 2022 AGS Support Ltd. Built with 💖 by{" "}
              <a href="https://indieridge.com">Indie Ridge</a>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
