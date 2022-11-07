import styled from "styled-components"
import { colors, font } from "../../const"

export const StyledWapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 0px;
  margin-bottom: 40px;
`
export const StyledHeader = styled.h1`
  text-align: center;
  font-size: ${font.size.xxl};
  font-weight: 700;
  color: ${colors.dark};
`

export const StyledServiceCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
`
