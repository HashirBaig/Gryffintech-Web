import React from "react"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import {
  StyledWrapper,
  StyledContainer,
  StyledHeading,
  StyledParagrah,
  StyledButton,
  StyledGif,
  StyledGifContainer,
} from "./Styles"

function Banner({ executeScroll }) {
  return (
    <StyledWrapper>
      <Fade left cascade>
        <StyledGifContainer>
          <StyledGif src="/assets/svgs/programming_pana.svg" />
        </StyledGifContainer>
      </Fade>

      <StyledContainer>
        <Pulse>
          <StyledHeading>Developing Impact</StyledHeading>
        </Pulse>
        <Fade top cascade>
          <StyledParagrah>
            We design, develop and deploy custom software solutions for organizations that want to make an impact
            through technology
          </StyledParagrah>
          <StyledParagrah>Get in touch with one of our specialists</StyledParagrah>
        </Fade>
        <Fade bottom cascade>
          <StyledButton onClick={executeScroll}>Contact us</StyledButton>
        </Fade>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Banner
