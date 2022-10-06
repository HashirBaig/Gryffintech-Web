import React from "react"
import { Formik } from "formik"
import { StyledForm, StyledField, StyledLabel, StyledButton, StyledButtonContainer } from "./Styles"

function ContactForm() {
  const onSubmit = values => {
    console.log("val: ", values)
  }

  const initialValues = { firstName: "", lastName: "", email: "", services: "", message: "" }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <StyledForm>
        <StyledLabel>Name</StyledLabel>
        <StyledField name="firstName" placeholder="Name"></StyledField>

        <StyledLabel>Last Name</StyledLabel>
        <StyledField name="lastName" placeholder="Last Name"></StyledField>

        <StyledLabel>Email</StyledLabel>
        <StyledField name="email" placeholder="Email"></StyledField>

        <StyledLabel>How can we help you?</StyledLabel>
        <StyledField name="services"></StyledField>

        <StyledLabel>Message</StyledLabel>
        <StyledField name="message"></StyledField>

        <StyledButtonContainer>
          <StyledButton>Send</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </Formik>
  )
}

export default ContactForm
