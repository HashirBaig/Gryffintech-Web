import styled from "styled-components"
import { colors, font } from "../../../const"

export const StyledFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${colors.dark};
  color: ${colors.light};
  background-color: ${colors.dark};
`

export const StyledFooterText = styled.p`
  display: flex;
  gap: 8px;
  font-size: ${font.size.md};
  padding-left: 20px;
`
export const StyledFooterTextIcon = styled.i`
  font-size: ${font.size.xl};
`

export const StyledIconContainer = styled.div`
  display: flex;
  gap: 15px;
  padding-right: 20px;
`
export const StyledIcon = styled.i`
  color: ${colors.white};
  font-size: 20px;
  cursor: pointer;
`
