import styled from "styled-components"
import { colors, font } from "../../const"

export const StyledWrapper = styled.div`
  width: 100%;
  height: 470px;
  display: flex;
  justify-content: center;
  background: radial-gradient(${colors.dark}, ${colors.darker});
  // background-color: ${colors.dark};
`
export const StyledCarouselContainer = styled.div`
  height: auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledHeading = styled.h1`
  margin-bottom: 0px;
  font-size: ${font.size.xxxl};
  font-weight: 800;
  color: ${colors.light};
`
export const StyledParagrah = styled.p`
  font-size: 18px;
  color: ${colors.light};
`

export const StyledButton = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 25px;
  border: 1px solid ${colors.dark};
  margin: 15px 0px;
  border-radius: 4px;
  color: inherit;
  background-color: ${colors.light};
  cursor: pointer;

  :hover {
    border: 1px solid ${colors.light};
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`
export const StyledIcon = styled.i`
  font-size: ${font.size.icon};
  margin-left: 8px;
`
