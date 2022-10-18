import React from "react"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import {
  StyledWrapper,
  StyledCarouselContainer,
  StyledHeading,
  StyledParagrah,
  StyledButton,
  StyledBg,
  StyledGif,
  StyledBgImg,
  StyledBgImgContainer,
  StyledGifContainer,
} from "./Styles"

function Carousel({ executeScroll }) {
  return (
    <>
      <StyledBg>
        <StyledBgImgContainer>
          <StyledBgImg src="/assets/images/carousel_img_2.png" />
        </StyledBgImgContainer>
      </StyledBg>

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
            <StyledButton onClick={executeScroll}>Contact us</StyledButton>
          </Fade>
        </StyledCarouselContainer>
        <Fade right cascade>
          <StyledGifContainer>
            <StyledGif src="/assets/gifs/gif_1.gif" />
          </StyledGifContainer>
        </Fade>
      </StyledWrapper>
    </>
  )
}

export default Carousel
