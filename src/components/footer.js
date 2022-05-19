import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer class="py-20">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4 mb-8 lg:mb-16">
          <div class="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <a class="text-gray-600 text-2xl leading-none" href="#">
              <img
                class="h-8"
                src="plain-assets/logos/plain-indigo.svg"
                alt=""
                width="auto"
              />
            </a>
            <p class="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p class="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
              {" "}
              © {new Date().getFullYear()} &middot; Built with 💖 by{" "}
              <a href="https://indieridge.com">Indie Ridge</a>
            </p>
            <div>
              <a class="inline-block h-6 mr-8" href="#">
                <img class="mx-auto" src="plain-assets/socials/facebook.svg" />
              </a>
              <a class="inline-block h-6 mr-8" href="#">
                <img class="mx-auto" src="plain-assets/socials/github.svg" />
              </a>
              <a class="inline-block h-6 mr-8" href="#">
                <img class="mx-auto" src="plain-assets/socials/instagram.svg" />
              </a>
              <a class="inline-block h-6 mr-8" href="#">
                <img class="mx-auto" src="plain-assets/socials/linkedin.svg" />
              </a>
              <a class="inline-block h-6" href="#">
                <img class="mx-auto" src="plain-assets/socials/twitter.svg" />
              </a>
            </div>
          </div>
          <div class="w-full lg:w-2/3 px-4">
            <div class="flex flex-wrap justify-between">
              <div class="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 class="mb-6 text-lg font-bold font-heading">Company</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Careers
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 class="mb-6 text-lg font-bold font-heading">Pages</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Login
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Register
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Add list
                    </a>
                  </li>
                  <li>
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 class="mb-6 text-lg font-bold font-heading">Legal</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Terms
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4">
                <h3 class="mb-6 text-lg font-bold font-heading">Resources</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Blog
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Service
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Product
                    </a>
                  </li>
                  <li>
                    <a class="text-indigo-500 hover:text-indigo-700" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t pt-8">
          <p class="lg:text-center text-sm text-gray-500">
            All rights reserved. © AGS Support
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
