import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"

import { useForm } from "react-hook-form"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import { submitFormToEndpoint } from "@services/forms"

const ContactFormBasin = ({ title, buttonText }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [submitted, setSubmitted] = useState(false)
  const [rejected, setRejected] = useState(false)
  const [token, setToken] = useState(false)

  // Event handler to call the verification on form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available")
      return
    }
    const token = await executeRecaptcha("ContactFormBasin")
    setToken(token)
  }, [executeRecaptcha])

  // Trigger the verification as soon as the component has been loaded
  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    data["g-recaptcha-response"] = token
    console.log("token", token)
    submitFormToEndpoint(process.env.GATSBY_BASIN_ENDPOINT, data)
      // Set Submitted to true if form has been successfully submitted on the server or rejected if it has been rejected at Basin
      .then(json => {
        if (json.success) {
          setSubmitted(true)
        } else {
          setRejected(true)
        }
      })
  }
  if (rejected) {
    return (
      <div className="bg-[#f2f2f2] p-10 rounded-lg h-[100%]">
        <h2 className="text-dark">Oops</h2>
        <p className="text-dark">There was a problem with the form</p>
      </div>
    )
  }
  if (submitted) {
    return (
      <div className="bg-[#f2f2f2] p-10 rounded-lg h-[100%]">
        <h2 className="text-dark">Thanks for contacting us</h2>
        <p className="text-dark"> We'll be in touch soon</p>
      </div>
    )
  }
  return (
    <>
      {title && <h2>{title}</h2>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="basinform"
        enctype="multipart/form-data"
      >
        <label htmlFor="name" className="font-bold text-dark">
          Name*
        </label>
        {errors.name && (
          <span className="text-[14px] text-rose-600 ml-2 font-bold">
            Please tell us your name
          </span>
        )}
        <input
          {...register("name", { required: true, maxLength: 20 })}
          id="name"
          name="name"
          className="w-full py-3 pl-3 mb-4 border rounded border-dark text-dark"
          type="text"
          placeholder="Name"
        />

        <label htmlFor="email" className="font-bold text-dark">
          Email*
        </label>
        {errors.email && (
          <span className="text-[14px] text-rose-600 ml-2 font-bold">
            Please tell us your email
          </span>
        )}
        <input
          {...register("email", { required: true, maxLength: 20 })}
          id="email"
          name="email"
          className="w-full py-3 pl-3 mb-4 border rounded border-dark text-dark"
          type="email"
          placeholder="Email"
        />

        <label htmlFor="mobile" className="font-bold text-dark">
          Mobile*
        </label>
        {errors.mobile && (
          <span className="text-[14px] text-rose-600 ml-2 font-bold">
            Please tell us your mobile number
          </span>
        )}
        <input
          {...register("mobile", { required: true, maxLength: 20 })}
          id="mobile"
          name="mobile"
          className="w-full py-3 pl-3 mb-4 border rounded border-dark text-dark"
          type="text"
          placeholder="Mobile"
        />

        <label htmlFor="message" className="font-bold text-dark">
          Message*
        </label>
        {errors.message && (
          <span className="text-[14px] text-rose-600 ml-2 font-bold">
            Please tell us your message
          </span>
        )}
        <textarea
          {...register("message", { required: true })}
          rows="7"
          id="message"
          name="message"
          className="w-full p-3 mb-4 border rounded resize-none border-dark text-dark"
          placeholder="Your message"
        ></textarea>

        <label htmlFor="resume" className="font-bold text-dark">
          Your Resume (optional)
        </label>

        <input
          {...register("resume", { required: false })}
          id="resume"
          name="resume"
          className="w-full py-3 pl-3 mb-4 border rounded border-dark text-dark"
          type="file"
        />

        <button
          className="!py-[12px] !px-[16px] w-auto inline-block bg-primary text-white border-primary border-2 rounded-sm"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </>
  )
}

ContactFormBasin.defaultProps = {
  title: null,
  buttonText: "Send enquiry",
}

ContactFormBasin.propTypes = {
  data: PropTypes.object,
}

export default ContactFormBasin
