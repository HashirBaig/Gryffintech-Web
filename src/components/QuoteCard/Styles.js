import styled from "styled-components"
import { colors } from "../../const"

export const StyledQuoteCard = styled.div`
  height: 220px;
  min-width: 450px;
  max-width: 450px;
  padding: 8px;
  margin-right: 30px;
  border-radius: 15px;
  box-shadow: 4px 4px 4px ${colors.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// contains quotes from clients
export const StyledQuoteCardHeader = styled.div``
export const StyledQuoteContainer = styled.div``
export const StyledQuote = styled.p``

// contains designation and company name
export const StyledQuoteCardBody = styled.div``
export const StyledClientInfoContainer = styled.div``
export const StyledClientName = styled.h2``
export const StyledClientInfo = styled.p``

// container quotes icon
export const StyledQuoteCardFooter = styled.div``
export const StyledIconContainer = styled.div`
  text-align: right;
`
export const StyledIcon = styled.i`
  font-size: 24px;
  background: -webkit-linear-gradient(130deg, #5f4b8b, #e69a8d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
