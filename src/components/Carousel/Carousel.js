import React from "react"
import { StyledWrapper, StyledCarouselContainer, StyledHeading, StyledParagrah, StyledButton } from "./Styles"

function Carousel() {
  return (
    <StyledWrapper>
      <StyledCarouselContainer>
        <StyledHeading>Developing Impact</StyledHeading>
        <StyledParagrah>
          We design, develop and deploy custom software solutions for organizations that want to make an impact through
          technology.
        </StyledParagrah>
        <StyledButton>Contact us</StyledButton>
      </StyledCarouselContainer>
    </StyledWrapper>
  )
}

export default Carousel
