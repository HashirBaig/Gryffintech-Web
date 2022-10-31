import styled from "styled-components"
import { colors, font, mediaQueries as media } from "../../../const"

export const StyledHeader = styled.div`
  position: sticky;
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 3px 8px ${colors.lightOrange};
  z-index: 10;
`
export const StyledLogo = styled.div`
  font-weight: 800;
  font-size: 24px;
  margin-left: 20px;
  padding: 8px;
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }

  ${({ isOpenMenu }) =>
    isOpenMenu
      ? `
  :hover {
    cursor: pointer;
  }
  `
      : ``}
`
export const StyledImage = styled.img`
  width: 80px;
  height: auto;
  background: norepeat;
  color: blue;
`

export const StyledIcon = styled.i`
  color: ${colors.dark};
  font-size: 34px;
`

export const StyledNavbarContainer = styled.div`
  ${media.lap} {
    display: none;
  }
  display: block;
`
export const StyledMenuButtonContainer = styled.div`
  ${media.lap} {
    display: flex;
  }
  position: relative;
  display: none;
`
export const StyledMenuButton = styled.i`
  font-size: ${font.size.icon.header};
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  color: ${colors.dark};
  :hover {
    background-color: ${colors.light};
    color: ${colors.seconday};
  }
`
export const StyledMenu = styled.div`
  position: fixed;
  top: 74px;
  right: -100vw;
  width: 100%;
  height: 100%;
  background-color: ${colors.light};
  transition: 0.3s ease left;
  z-index: 100;
  display: none;

  ${media.lap} {
    display: flex;
  }
`
