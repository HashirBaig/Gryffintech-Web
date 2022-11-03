import styled from "styled-components"
import { colors, font, mediaQueries as media } from "../../const"

export const StyledCard = styled.div`
  ${media.palm} {
    width: 140px;
    heigh: auto;
    text-align: center;
  }

  width: 220px;
  heigh: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  overflow: hidden;
  border-radius: 6px;
  background-color: ${colors.white};
  gap: 10px;
  padding: 0 10px;
  transition: all 0.3s ease;

  :hover {
    filter: drop-shadow(0px 0px 6px ${colors.shadow});
    transform: scale(1);
  }
`

export const StyledContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.palm} {
    display: ${({ id }) => (id === "read" ? "none" : "flex")};
  }
`
export const StyledCardIcon = styled.i`
  ${media.palm} {
    font-size: 24px;
  }
  font-size: 24px;
  padding: 8px;
  margin: 5px 0;
  border-radius: 50%;

  :hover {
    background-color: ${colors.light};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`
export const StyledCardHeader = styled.h4`
  margin: 0 0;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.palm} {
    font-size: ${font.size.md};
  }
`
export const StyledTextContainer = styled.div``
export const StyledText = styled.p`
  ${media.palm} {
    display: none;
  }
  text-align: left;
`
export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`
