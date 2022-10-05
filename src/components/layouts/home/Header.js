import React from "react"
import { StyledHeader, StyledLogo } from "./Styles"

import Navbar from "../../Navbar"

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>LOGO</StyledLogo>
      <Navbar />
    </StyledHeader>
  )
}

export default Header
