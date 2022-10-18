import React from "react"
import { Fade } from "react-reveal"
import {
  StyledWrapper,
  StyledContainer,
  StyledContactHeader,
  StyledText,
  StyledGifContainer,
  StyledGif,
  StyledInfoContainer,
  StyledIconContainer,
  StyledIcon,
  StyledInfo,
} from "./Styles"

import ContactForm from "../ContactForm"

function Contact({ myRef }) {
  return (
    <StyledWrapper ref={myRef}>
      <StyledContactHeader>Contact us</StyledContactHeader>
      <StyledText>We would love to hear about your project</StyledText>
      <StyledContainer>
        <ContactForm />
        <StyledInfoContainer>
          <Fade right cascade>
            <StyledGifContainer>
              <StyledGif src="/assets/gifs/contact_us_gif.gif" />
            </StyledGifContainer>
          </Fade>
          <StyledInfo>
            <Fade right cascade>
              <StyledIconContainer>
                <StyledIcon className="fas fa-phone"></StyledIcon>
              </StyledIconContainer>
              <StyledText>051-2344526</StyledText>
            </Fade>
          </StyledInfo>
          <StyledInfo>
            <Fade right cascade>
              <StyledIconContainer>
                <StyledIcon className="fas fa-map-marker-alt"></StyledIcon>
              </StyledIconContainer>
              <StyledText>Razia Sharif Plaza, Blue Area, Islamabad</StyledText>
            </Fade>
          </StyledInfo>
          <StyledInfo>
            <Fade right cascade>
              <StyledIconContainer>
                <StyledIcon className="fab fa-twitter"></StyledIcon>
              </StyledIconContainer>
              <StyledText>@Gryffintech</StyledText>
            </Fade>
          </StyledInfo>
        </StyledInfoContainer>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Contact
