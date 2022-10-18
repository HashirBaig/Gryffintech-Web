import styled from "styled-components"
import { colors } from "../../const"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 60px 0;
  text-align: center;
`
export const StyledContactHeader = styled.h1`
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 0px;
  color: ${colors.font.darker};
`
export const StyledContactParagraph = styled.p`
  color: ${colors.font.darker};
  font-weight: bold;
`
