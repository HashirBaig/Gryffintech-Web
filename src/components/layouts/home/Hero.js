import React from "react"
import { StyledHeader, StyledLogo, StyledNavBar, StyledNavItem, StyledI, StyledSpan } from "./Styles"

function Hero() {
  return (
    <StyledHeader>
      <StyledLogo>LOGO</StyledLogo>
      <StyledNavBar>
        <StyledNavItem>
          <StyledSpan>About Us</StyledSpan>
        </StyledNavItem>
        <StyledNavItem>
          <StyledSpan>Services</StyledSpan>
          <StyledI className="fas fa-sort-down"></StyledI>
        </StyledNavItem>
        <StyledNavItem>
          <StyledSpan>Hire Developer</StyledSpan>
          <StyledI className="fas fa-sort-down"></StyledI>
        </StyledNavItem>
        <StyledNavItem>
          <StyledSpan>Contact</StyledSpan>
        </StyledNavItem>
        <StyledNavItem>
          <StyledSpan>Career</StyledSpan>
        </StyledNavItem>
      </StyledNavBar>
    </StyledHeader>
  )
}

export default Hero
