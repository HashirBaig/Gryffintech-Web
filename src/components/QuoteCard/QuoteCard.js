import React from "react"
import {
  StyledQuoteCard,
  StyledQuoteCardHeader,
  StyledQuoteContainer,
  StyledQuote,
  StyledQuoteCardBody,
  StyledClientInfoContainer,
  StyledClientName,
  StyledClientInfo,
  StyledQuoteCardFooter,
  StyledIconContainer,
  StyledIcon,
} from "./Styles"

function QuoteCard(props) {
  const { name, quote, company, designation } = props

  return (
    <StyledQuoteCard>
      <StyledQuoteCardHeader>
        <StyledQuoteContainer>
          <StyledQuote>{quote}</StyledQuote>
        </StyledQuoteContainer>
      </StyledQuoteCardHeader>
      <StyledQuoteCardBody>
        <StyledClientInfoContainer>
          <StyledClientName>{name}</StyledClientName>
          <StyledClientInfo>
            {designation}, {company}
          </StyledClientInfo>
        </StyledClientInfoContainer>
      </StyledQuoteCardBody>
      <StyledQuoteCardFooter>
        <StyledIconContainer>
          <StyledIcon className="fas fa-quote-right"></StyledIcon>
        </StyledIconContainer>
      </StyledQuoteCardFooter>
    </StyledQuoteCard>
  )
}

export default QuoteCard
