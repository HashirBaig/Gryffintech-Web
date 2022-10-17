import React, { useState } from "react"
import {
  StyledHeader,
  StyledLogo,
  StyledImage,
  StyledNavbarContainer,
  StyledMenuButtonContainer,
  StyledMenuButton,
  StyledMenu,
} from "./Styles"

import Navbar from "../../Navbar"
import { icons } from "../../../const"

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu)
  const handleCloseMenu = () => setIsOpenMenu(false)

  return (
    <>
      <StyledHeader>
        <StyledLogo onClick={handleCloseMenu} isOpenMenu={isOpenMenu}>
          <StyledImage src="/assets/images/gt-logo.jpg" alt="logo" />
        </StyledLogo>
        <StyledNavbarContainer>
          <Navbar />
        </StyledNavbarContainer>
        <StyledMenuButtonContainer>
          <StyledMenuButton
            className={isOpenMenu ? icons.closeIcon : icons.menuIcon}
            onClick={toggleMenu}
          ></StyledMenuButton>
        </StyledMenuButtonContainer>
      </StyledHeader>
      <StyledMenu style={isOpenMenu ? { left: 0 } : {}}>
        <Navbar />
      </StyledMenu>
    </>
  )
}

export default Header
