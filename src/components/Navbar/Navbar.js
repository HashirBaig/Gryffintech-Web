import React, { useState } from "react"
import {
  StyledNavbar,
  StyledNavItemContainer,
  StyledNavItem,
  StyledNavLabel,
  StyledNavLink,
  StyledIcon,
} from "./Styles"
import Dropdown from "../Dropdown"

import { navMenu } from "../../utils/common"

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleOpenDropdown = label => {
    if (label === openDropdown) return setOpenDropdown(null)
    setOpenDropdown(label)
  }

  return (
    <StyledNavbar>
      {navMenu?.map(({ label, link, tree }, idx) => {
        const isOpen = label === openDropdown
        return (
          <StyledNavItemContainer key={`Nav-Item-${label}-Container-${idx}`}>
            {link && (
              <StyledNavItem>
                <StyledNavLink>{label}</StyledNavLink>
              </StyledNavItem>
            )}
            {!link && (
              <StyledNavItem onClick={() => handleOpenDropdown(label)}>
                <StyledNavLabel isOpen={isOpen}>{label}</StyledNavLabel>
                <StyledIcon isOpen={isOpen} className="fas fa-sort-down"></StyledIcon>
              </StyledNavItem>
            )}

            {isOpen && <Dropdown tree={tree} />}
          </StyledNavItemContainer>
        )
      })}
    </StyledNavbar>
  )
}

export default Navbar
