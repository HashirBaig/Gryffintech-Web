import styled from "styled-components"

const COLORS = {
  LIGHT: "#f0f0f0",
  DARK: "rgb(40,40,40)",
  DARKER: "rgb(20,20,20)",
}

export const StyledWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  background: radial-gradient(${COLORS.DARK}, ${COLORS.DARKER});
  // background-color: ${COLORS.DARK};
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
  font-size: 48px;
  font-weight: 800;
  color: ${COLORS.LIGHT};
`
export const StyledParagrah = styled.p`
  font-size: 18px;
  color: ${COLORS.LIGHT};
`

export const StyledButton = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 25px;
  border: 1px solid ${COLORS.DARK};
  margin: 15px 0px;
  border-radius: 4px;
  color: inherit;
  background-color: ${COLORS.LIGHT};
  cursor: pointer;

  :hover {
    border: 1px solid ${COLORS.LIGHT};
    background-color: ${COLORS.DARK};
    color: ${COLORS.LIGHT};
  }
`
