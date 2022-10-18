import React from "react"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"
import { StyledCard, StyledCardHeader, StyledIconContainer, StyledCardIcon, StyledImg } from "./Styles"

function Card({ icon = "far fa-envelope", header, src, label, executeScroll }) {
  return (
    <StyledCard>
      <Pulse>
        <StyledCardHeader>{header}</StyledCardHeader>
      </Pulse>
      <Fade>
        <StyledImg src={src} alt={label} />
      </Fade>

      {/* <Fade bottom cascade>
        <StyledCardBody>
          <StyledCardParagraph>{description}</StyledCardParagraph>
        </StyledCardBody>
      </Fade> */}
      <Fade top cascade>
        <StyledIconContainer onClick={executeScroll}>
          <StyledCardIcon className={icon}></StyledCardIcon>
        </StyledIconContainer>
      </Fade>
    </StyledCard>
  )
}

export default Card
