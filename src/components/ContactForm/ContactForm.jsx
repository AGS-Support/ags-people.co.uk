import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3"

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
        <label>Name*</label>
        <input
          required={true}
          id="name"
          name="name"
          className="w-full py-3 pl-3 mb-4 border rounded"
          type="text"
          placeholder="Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label>Email*</label>
        <input
          required={true}
          id="email"
          name="email"
          className="w-full py-3 pl-3 mb-4 border rounded"
          type="email"
          placeholder="Email"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>Mobile</label>
        <input
          required={false}
          id="mobile"
          name="mobile"
          className="w-full py-3 pl-3 mb-4 border rounded"
          type="text"
          placeholder="Mobile:"
        />
        <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
        <label>Message</label>

        <textarea
          required={true}
          rows="20"
          id="message"
          name="message"
          className="mb-4 w-full p-3 border rounded resize-none"
          placeholder="Your Message..."
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          className="block w-full px-5 py-3 text-sm bg-secondary text-white font-semibold  rounded transition duration-200"
          isSubmit={false}
          text="Send"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </>
  )
}
export default ContactUs
