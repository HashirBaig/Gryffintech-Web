import React from "react"
import { Formik } from "formik"
import {
  StyledForm,
  StyledFormNameContainer,
  StyledField,
  StyledLabel,
  StyledButton,
  StyledButtonContainer,
  StyledFormContainer,
} from "./Styles"

const textAreaStyles = { height: "150px", padding: "10px 10px", fontSize: "14px", fontFamily: "Helvetica, sans-sarif" }

function ContactForm() {
  const onSubmit = values => {
    console.log("val: ", values)
  }

  const initialValues = { firstName: "", lastName: "", email: "", services: "", message: "" }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <StyledForm>
        <StyledFormNameContainer>
          <StyledFormContainer>
            <StyledLabel>Name</StyledLabel>
            <StyledField name="firstName" placeholder="Name"></StyledField>
          </StyledFormContainer>
          <StyledFormContainer>
            <StyledLabel>Last Name</StyledLabel>
            <StyledField name="lastName" placeholder="Last Name"></StyledField>
          </StyledFormContainer>
        </StyledFormNameContainer>
        <StyledFormContainer>
          <StyledLabel>Email</StyledLabel>
          <StyledField name="email" placeholder="Enter your email" type="email"></StyledField>
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledLabel>How can we help you?</StyledLabel>
          <StyledField name="services"></StyledField>
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledLabel>Message</StyledLabel>
          <StyledField name="message" as={"textarea"} style={textAreaStyles}></StyledField>
        </StyledFormContainer>
        <StyledButtonContainer>
          <StyledButton>Send</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </Formik>
  )
}

export default ContactForm
