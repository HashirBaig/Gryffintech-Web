import styled from "styled-components"
import { colors, font } from "../../const"

export const StyledWapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 0px;
`
export const StyledServiceHeader = styled.h1`
  margin: 50px 0px;
  text-align: center;
  font-size: ${font.size.xxl};
  font-weight: 700;
  color: ${colors.darker};
`

export const StyledServiceCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`
