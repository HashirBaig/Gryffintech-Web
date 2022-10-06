import React from "react"
import { StyledWrapper, StyledContactTextContainer, StyledContactHeader, StyledContactParagraph } from "./Styles"

import ContactForm from "../ContactForm"

function Contact() {
  return (
    <StyledWrapper>
      <StyledContactTextContainer>
        <StyledContactHeader>Contact us</StyledContactHeader>
        <StyledContactParagraph>We would love to hear about your project.</StyledContactParagraph>
        <StyledContactParagraph>
          One of our specialist will reach out to you within next 2 hours.
        </StyledContactParagraph>
        <StyledContactParagraph>Gryffintech Islamabad</StyledContactParagraph>
        <StyledContactParagraph>hello@gryffintech.com</StyledContactParagraph>
      </StyledContactTextContainer>
      <ContactForm />
    </StyledWrapper>
  )
}

export default Contact
