import styled from "styled-components"
import { colors, font } from "../../const"

export const StyledCard = styled.div`
  width: 300px;
  padding: 40px 20px;
  background-color: white;
  overflow: hidden;
  border-radius: 4px;
  :hover {
    filter: drop-shadow(0px 0px 15px ${colors.shadow});
    transform: scale(1);
    transition: all 0.3s ease;
  }
`
export const StyledCardIcon = styled.i`
  font-size: ${font.size.icon};
`
export const StyledCardHeader = styled.h2`
  height: 7vh;
`
export const StyledCardBody = styled.div``
export const StyledCardParagraph = styled.p``
