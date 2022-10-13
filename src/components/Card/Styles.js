import styled from "styled-components"
import { colors } from "../../const"

export const StyledCard = styled.div`
  width: 200px;
  heigh: auto;
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
  font-size: 34px;
`
export const StyledCardHeader = styled.h3`
  height: 6vh;
`
export const StyledCardBody = styled.div``
export const StyledCardParagraph = styled.p`
  text-align: left;
`
