import React from "react"
import {
  StyledWrapper,
  StyledContainer,
  StyledContactTextContainer,
  StyledContactHeader,
  StyledContactParaContainer,
  StyledContactParagraph,
} from "./Styles"

import ContactForm from "../ContactForm"

function Contact() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledContactTextContainer>
          <StyledContactHeader>Contact us</StyledContactHeader>
          <StyledContactParaContainer>
            <StyledContactParagraph>We would love to hear about your project.</StyledContactParagraph>
            <StyledContactParagraph>
              One of our specialist will reach out to you within next 2 hours
            </StyledContactParagraph>
          </StyledContactParaContainer>
          <StyledContactParagraph>Gryffintech Islamabad</StyledContactParagraph>
          <StyledContactParagraph>hello@gryffintech.com</StyledContactParagraph>
        </StyledContactTextContainer>
        <ContactForm />
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Contact
