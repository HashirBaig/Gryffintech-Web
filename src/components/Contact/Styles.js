import styled from "styled-components"
import { colors } from "../../const"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: white;
  // border-top-left-radius: 20%;
  // border-top-right-radius: 20%;
  // border-bottom-left-radius: 20%;
  // border-bottom-right-radius: 20%;
`
export const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin: 60px 0px;
  text-align: center;
`
export const StyledContactHeader = styled.h1`
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 0px;
`
export const StyledContactParagraph = styled.p`
  color: ${colors.font.primary};
`
