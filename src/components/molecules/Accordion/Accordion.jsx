import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import { Disclosure } from "@headlessui/react"

import { PlusIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"

const Accordion = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between  bg-tint p-4 text-left text-sm font-medium text-black hover:bg-tint focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className="text-dark text-lg">{item.question}</span>
                  {open ? (
                    <XIcon className="h-5 w-5 text-black" />
                  ) : (
                    <PlusIcon className="h-5 w-5 text-black" />
                  )}
                </Disclosure.Button>

                <Disclosure.Panel className="p-4 text-md text-dark bg-tint">
                  {parse(item.answer)}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )
      })}
    </>
  )
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Accordion
