import styled from "styled-components"
import { colors, mediaQueries as media } from "../../const"

export const StyledNavbar = styled.div`
  ${media.lap} {
    display: flex;
    flex-direction: column;
    margin-right: 0px;
    padding: 30px;
    gap: 20px;
  }
  width: 100%;
  height: auto;
  display: flex;
  gap: 40px;
  margin-right: 20px;
`
export const StyledNavItemContainer = styled.div`
  ${media.lap} {
    width: 100%;
    display: block;
  }
  width: fit-content;
  height: auto;
`
export const StyledNavItem = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  gap: 4px;
  cursor: pointer;
  font-weight: bold;
  color: ${colors.dark};

  :hover {
    color: ${colors.primary};
    transition: all 0.3s ease;
  }

  ${media.lap} {
    width: 100%;
    height: auto;
    justify-content: space-between;
  }
`
export const StyledNavLink = styled.div``
export const StyledNavLabel = styled.div``
export const StyledIcon = styled.i`
  transform: ${({ isOpen }) => (isOpen ? `none` : `rotate(-90deg)`)};
`
