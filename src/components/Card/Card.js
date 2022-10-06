import React from "react"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"
import { StyledCard, StyledCardIcon, StyledCardHeader, StyledCardBody, StyledCardParagraph } from "./Styles"

function Card({ icon = "fas fa-cogs", header, description }) {
  return (
    <StyledCard>
      <Fade top cascade>
        <StyledCardIcon className={icon}></StyledCardIcon>
      </Fade>
      <Pulse>
        <StyledCardHeader>{header}</StyledCardHeader>
      </Pulse>
      <Fade bottom cascade>
        <StyledCardBody>
          <StyledCardParagraph>{description}</StyledCardParagraph>
        </StyledCardBody>
      </Fade>
    </StyledCard>
  )
}

export default Card
