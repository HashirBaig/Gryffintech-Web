import styled from "styled-components"
import { colors, font } from "../../const"

export const StyledWapper = styled.div`
  padding: 0px 20px;
`
export const StyledServiceHeader = styled.h1`
  margin: 50px 0px;
  text-align: center;
  font-size: ${font.size.xxl};
  font-weight: 700;
  color: ${colors.darker};
`

export const StyledServiceCardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`
