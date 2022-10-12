import React from "react"
import { StyledWrapper, StyledContainer, StyledContactHeader, StyledContactParagraph } from "./Styles"

import ContactForm from "../ContactForm"

function Contact() {
  return (
    <StyledWrapper id="contact">
      <StyledContactHeader>Contact us</StyledContactHeader>
      <StyledContactParagraph>We would love to hear about your project</StyledContactParagraph>
      <StyledContainer>
        <ContactForm />
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Contact
