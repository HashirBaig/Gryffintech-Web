import styled from "styled-components"
import { colors, mediaQueries as media } from "../../../const"

export const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 3px 8px ${colors.shadow};
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
  width: 150px;
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
    margin-right: 30px;
  }
  position: relative;
  display: none;
`
export const StyledMenuButton = styled.i`
  font-size: 28px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  color: ${colors.dark};
  :hover {
    background-color: ${colors.light};
    color: ${colors.secondary};
    transition: all 0.3s ease;
  }
`
export const StyledMenu = styled.div`
  position: fixed;
  top: 74px;
  right: -100vw;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  transition: 0.3s ease left;
  z-index: 10;
  display: none;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }

  ${media.lap} {
    display: flex;
  }
`
