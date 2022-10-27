import React, { useState } from "react"
import { Spinner } from "reactstrap"
import { Formik } from "formik"
import * as Yup from "yup"
import { StyledForm, StyledNameContainer, StyledButton } from "./Styles"
import FormikControl from "../FormikControl"
import { sendMail } from "../../services/api"

const schema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  service: Yup.string(),
  message: Yup.string(),
})

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const initialValues = { firstName: "", lastName: "", email: "", service: "", message: "" }

  const validateEmail = value => {
    let error
    if (!value) {
      error = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Invalid email address"
    }

    return error
  }

  const onSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true)
      await sendMail(values)
      resetForm()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      {formik => (
        <StyledForm>
          <StyledNameContainer>
            <FormikControl
              control="input"
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <FormikControl
              control="input"
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
          </StyledNameContainer>
          <FormikControl
            control="input"
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="abc@example.com"
            validate={validateEmail}
          />
          <FormikControl control="select" id="service" name="service" label="Service" />
          <FormikControl control="textarea" name="message" label="Message" placeholder="Let us know your thoughts" />
          <StyledButton type="submit">Send {isLoading && <Spinner color="light" />}</StyledButton>
        </StyledForm>
      )}
    </Formik>
  )
}

export default ContactForm
