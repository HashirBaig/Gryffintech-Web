import React from "react"
import {
  StyledQuoteCard,
  StyledQuoteContainer,
  StyledQuote,
  StyledNameContainer,
  StyledName,
  StyledInfo,
  StyledIconContainer,
  StyledIcon,
} from "./Styles"

function QuoteCard(props) {
  const { name, designation, company, quote } = props
  return (
    <StyledQuoteCard>
      <StyledQuoteContainer>
        <StyledQuote>{quote}</StyledQuote>
      </StyledQuoteContainer>
      <StyledNameContainer>
        <StyledName>{name}</StyledName>
      </StyledNameContainer>
      <StyledInfo>
        {designation}, {company}
      </StyledInfo>
      <StyledIconContainer>
        <StyledIcon className="fas fa-quote-right"></StyledIcon>
      </StyledIconContainer>
    </StyledQuoteCard>
  )
}

export default QuoteCard
