import React from "react"
import { StyledHeader, StyledLogo, StyledImage } from "./Styles"

import Navbar from "../../Navbar"

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <StyledImage src="/assets/images/gt-logo.jpg" alt="logo" />
      </StyledLogo>
      <Navbar />
    </StyledHeader>
  )
}

export default Header
