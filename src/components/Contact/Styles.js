import styled from "styled-components"
import { colors } from "../../const"

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  // background-color: white;
  // border-top-left-radius: 20%;
  // border-top-right-radius: 20%;
  // border-bottom-left-radius: 20%;
  // border-bottom-right-radius: 20%;
`
export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 60px 0px;
`
export const StyledContactTextContainer = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  text-align: center;
  padding: 10px;
  border-radius: 4px;
`
export const StyledContactHeader = styled.h1`
  font-weight: 800;
  font-size: 38px;
`
export const StyledContactParaContainer = styled.p`
  margin: 40px 0px;
`
export const StyledContactParagraph = styled.p``
