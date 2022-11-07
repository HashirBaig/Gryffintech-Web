import React from "react"
import { StyledFooter, StyledFooterText, StyledFooterTextIcon, StyledIconContainer, StyledIcon } from "./Styles"

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterText>
        <StyledFooterTextIcon className="far fa-copyright"></StyledFooterTextIcon>
        2022 GRYFFIN TECH - ISLAMABAD PAKISTAN
      </StyledFooterText>
      <StyledIconContainer>
        <StyledIcon className="fab fa-twitter"></StyledIcon>
        <StyledIcon className="fab fa-youtube"></StyledIcon>
        <StyledIcon className="fab fa-linkedin"></StyledIcon>
      </StyledIconContainer>
    </StyledFooter>
  )
}

export default Footer
