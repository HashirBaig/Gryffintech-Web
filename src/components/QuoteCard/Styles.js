import styled from "styled-components"
import { colors } from "../../const"

export const StyledQuoteCard = styled.div`
  min-height: 160px;
  height: auto;
  min-width: 420px;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.3s ease;

  :hover {
    filter: drop-shadow(0px 0px 6px ${colors.shadow});
  }

  // animation: right-to-left 7s ease infinite;

  // @keyframes right-to-left {
  //   0% {
  //     transform: translateX(0%);
  //   }

  //   100% {
  //     transform: translateX(-100%);
  //   }
  // }
`
export const StyledQuoteContainer = styled.div`
  padding: 5px;
  height: 10vh;
`
export const StyledQuote = styled.em`
  margin-top: 0px;
  color: ${colors.dark};
  font-
`
export const StyledNameContainer = styled.div``
export const StyledName = styled.h2`
  margin: 0px 0px;
  color: ${colors.dark};
`
export const StyledInfo = styled.h5`
  margin: 0px 0px;
  color: ${colors.darker};
`
export const StyledIconContainer = styled.div`
  text-align: right;
  padding: 5px;
  opacity: 0.5;
`
export const StyledIcon = styled.i`
  font-size: 30px;
  color: ${colors.seconday};
  filter: drop-shadow(5px 5px 1px ${colors.shadow});
`
