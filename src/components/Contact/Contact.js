import React from "react"
import { StyledWrapper, StyledContainer, StyledContactHeader, StyledContactParagraph } from "./Styles"

import ContactForm from "../ContactForm"

function Contact({ myRef }) {
  return (
    <StyledWrapper ref={myRef}>
      <StyledContactHeader>Contact us</StyledContactHeader>
      <StyledContactParagraph>We would love to hear about your project</StyledContactParagraph>
      <StyledContainer>
        <ContactForm />
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Contact
