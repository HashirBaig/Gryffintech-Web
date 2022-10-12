import React from "react"
import {
  StyledWrapper,
  StyledContainer,
  StyledContactInfoContainer,
  StyledContactHeader,
  StyledH2,
  StyledContactParaContainer,
  StyledContactParagraph,
} from "./Styles"

import ContactForm from "../ContactForm"

function Contact() {
  return (
    <StyledWrapper id="contact">
      <StyledContactHeader>Contact us</StyledContactHeader>
      <StyledContactParagraph>We would love to hear about your project</StyledContactParagraph>
      <StyledContainer>
        <ContactForm />
        {/* <StyledContactInfoContainer>
          <StyledH2>Contact Information</StyledH2>
          <StyledContactParaContainer>
            <StyledContactParagraph>We would love to hear about your project.</StyledContactParagraph>
            <StyledContactParagraph>
              One of our specialist will reach out to you within next 2 hours
            </StyledContactParagraph>
          </StyledContactParaContainer>
          <StyledContactParagraph>Gryffintech Islamabad</StyledContactParagraph>
          <StyledContactParagraph>hello@gryffintech.com</StyledContactParagraph>
        </StyledContactInfoContainer> */}
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Contact
