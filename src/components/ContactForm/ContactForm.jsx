import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const ContactUs = ({ data }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_ID, {
    data: { "g-recaptcha-reponse": executeRecaptcha },
  })
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="font-bold">Name*</label>
        <input
          required={true}
          id="name"
          name="name"
          className="w-full py-3 pl-3 mb-4 border border-primary rounded"
          type="text"
          placeholder="Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label className="font-bold">Email*</label>
        <input
          required={true}
          id="email"
          name="email"
          className="w-full py-3 pl-3 mb-4 border border-primary rounded"
          type="email"
          placeholder="Email"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="font-bold">Mobile</label>
        <input
          required={false}
          id="mobile"
          name="mobile"
          className="w-full py-3 pl-3 mb-4 border border-primary rounded"
          type="text"
          placeholder="Mobile"
        />
        <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
        <label className="font-bold">Message</label>

        <textarea
          required={true}
          rows="20"
          id="message"
          name="message"
          className="mb-4 w-full p-3 border border-primary rounded resize-none"
          placeholder="Your Message..."
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          className="font-bold rounded rounded-lg border-2 px-10  text-center w-[100%]   mb-5 md:mb-0 p-4 block md:inline md:w-auto bg-primary border-primary text-white"
          isSubmit={false}
          text="Submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </>
  )
}
export default ContactUs
