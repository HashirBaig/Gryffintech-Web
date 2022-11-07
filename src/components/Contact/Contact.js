import React from "react"
import { Fade } from "react-reveal"
import {
  StyledWrapper,
  StyledContainer,
  StyledContactHeader,
  StyledText,
  StyledGifContainer,
  StyledGif,
} from "./Styles"

import ContactForm from "../ContactForm"

function Contact({ myRef }) {
  return (
    <StyledWrapper ref={myRef}>
      <StyledContactHeader>Contact us</StyledContactHeader>
      <StyledText>We would love to hear about your project</StyledText>
      <StyledContainer>
        <ContactForm />
        <Fade right cascade>
          <StyledGifContainer>
            <StyledGif src="/assets/svgs/emails_amico.svg" />
          </StyledGifContainer>
        </Fade>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Contact
