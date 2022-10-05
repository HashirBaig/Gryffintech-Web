import React, { useState } from "react"
import { StyledTreeItem, StyledTreeChild } from "./Styles"
import { StyledNavItem, StyledNavLink, StyledNavLabel, StyledIcon } from "../Navbar/Styles"

function TreeItem({ label, link, children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledTreeItem>
      {link && (
        <StyledNavItem>
          <StyledNavLink>{label}</StyledNavLink>
        </StyledNavItem>
      )}
      {!link && (
        <StyledNavItem onClick={() => setIsOpen(p => !p)}>
          <StyledNavLabel isOpen={isOpen}>{label}</StyledNavLabel>
          <StyledIcon isOpen={isOpen} className="fas fa-sort-down"></StyledIcon>
        </StyledNavItem>
      )}
      {children && isOpen && <StyledTreeChild>{children}</StyledTreeChild>}
    </StyledTreeItem>
  )
}

export default TreeItem
