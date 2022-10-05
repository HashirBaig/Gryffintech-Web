import React from "react"
import { StyledCard, StyledCardIcon, StyledCardHeader, StyledCardBody, StyledCardParagraph } from "./Styles"

function Card({ icon = "fas fa-cogs", header, description }) {
  return (
    <StyledCard>
      <StyledCardIcon className={icon}></StyledCardIcon>
      <StyledCardHeader>{header}</StyledCardHeader>
      <StyledCardBody>
        <StyledCardParagraph>{description}</StyledCardParagraph>
      </StyledCardBody>
    </StyledCard>
  )
}

export default Card
