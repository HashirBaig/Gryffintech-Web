import React from "react"
import { Formik, ErrorMessage } from "formik"
import {
  StyledForm,
  StyledNameContainer,
  StyledFirstNameContainer,
  StyledLastNameContainer,
  StyledField,
  StyledSelect,
  StyledLabel,
  StyledButton,
  StyledButtonContainer,
  StyledFormContainer,
  StyledErrorMessage,
} from "./Styles"
import { services } from "../../utils/common"
import RequireFieldMark from "../RequiredFieldMark/"

const textAreaStyles = { height: "150px", fontSize: "14px", padding: "10px 10px", fontFamily: "Helvetica, sans-sarif" }

function ContactForm() {
  const validate = value => {
    let error
    if (!value) {
      error = "Required"
    }
    return error
  }

  const validateEmail = value => {
    let error
    if (!value) {
      error = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Invalid email address"
    }

    return error
  }

  const onSubmit = values => {
    console.log("val: ", values)
  }

  const initialValues = { firstName: "", lastName: "", email: "", services: "", message: "" }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <StyledForm>
        <StyledNameContainer>
          <StyledFirstNameContainer>
            <StyledLabel>
              First Name
              <RequireFieldMark />{" "}
            </StyledLabel>
            <StyledField name="firstName" placeholder="Name" validate={validate}></StyledField>
            <ErrorMessage name="firstName" component={StyledErrorMessage} />
          </StyledFirstNameContainer>
          <StyledLastNameContainer>
            <StyledLabel>
              Last Name
              <RequireFieldMark />{" "}
            </StyledLabel>
            <StyledField name="lastName" placeholder="Last Name" validate={validate}></StyledField>
            <ErrorMessage name="lastName" component={StyledErrorMessage} />
          </StyledLastNameContainer>
        </StyledNameContainer>
        <StyledFormContainer>
          <StyledLabel>
            Email
            <RequireFieldMark />{" "}
          </StyledLabel>
          <StyledField name="email" placeholder="Enter your email" type="email" validate={validateEmail}></StyledField>
          <ErrorMessage name="email" component={StyledErrorMessage} />
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledLabel>How can we help you?</StyledLabel>
          <StyledSelect name="services">
            {services.map((service, idx) => (
              <option value={service.label} key={`${service.label}-${idx}`}>
                {service.label}
              </option>
            ))}
          </StyledSelect>
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledLabel>Message</StyledLabel>
          <StyledField
            name="message"
            as={"textarea"}
            style={textAreaStyles}
            placeholder="Let us know your thoughts"
          ></StyledField>
        </StyledFormContainer>
        <StyledButtonContainer>
          <StyledButton>Send</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </Formik>
  )
}

export default ContactForm
