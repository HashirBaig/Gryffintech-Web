import styled from "styled-components"
import { colors, font } from "../../../const"

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${colors.darker};
  color: ${colors.light};
  background-color: ${colors.darker};
`
export const StyledSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 15px;
  border-top: 2px solid ${colors.light};
  border-bottom: 2px solid ${colors.light};
  font-size: ${font.size.md};
`
export const StyledSummarySpan = styled.span`
  padding: 2px 0px;
  border-bottom: 1px solid ${colors.light};
`
export const StyledSocialMediaContainer = styled.div`
  text-align: center;
`
export const StyledSocialMediaText = styled.p`
  font-size: ${font.size.md};
`
export const StyledSocialMediaIconContainer = styled.div`
  display: flex;
  gap: 20px;
`
export const StyledSocialMediaIcon = styled.i`
  font-size: ${font.size.icon};
`
export const StyledFooterText = styled.p`
  display: flex;
  gap: 8px;
  font-size: ${font.size.md};
`
export const StyledFooterTextIcon = styled.i`
  font-size: ${font.size.xl};
`
