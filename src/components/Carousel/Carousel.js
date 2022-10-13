import React from "react"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import { StyledWrapper, StyledCarouselContainer, StyledHeading, StyledParagrah, StyledButton } from "./Styles"

function Carousel() {
  return (
    <StyledWrapper>
      <StyledCarouselContainer>
        <Pulse>
          <StyledHeading>Developing Impact</StyledHeading>
        </Pulse>
        <Fade top cascade>
          <StyledParagrah>
            We design, develop and deploy custom software solutions for organizations that want to make an impact
            through technology.
          </StyledParagrah>
          <StyledParagrah>Get in touch with one of our specialists</StyledParagrah>
        </Fade>
        <Fade bottom cascade>
          <StyledButton href="#contact">Contact us</StyledButton>
        </Fade>
      </StyledCarouselContainer>
    </StyledWrapper>
  )
}

export default Carousel
