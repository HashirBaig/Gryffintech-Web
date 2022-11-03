import React from "react"
import "react-multi-carousel/lib/styles.css"
import { StyledWrapper, StyledContainer } from "./Styles"

import QuoteCard from "../QuoteCard"
import { clientQuotes } from "../../utils/common"

function Quotes() {
  return (
    <StyledWrapper>
      <StyledContainer>
        {clientQuotes.map(({ name, designation, company, quote }, idx) => (
          <QuoteCard key={`quote-card-${idx}`} name={name} designation={designation} company={company} quote={quote} />
        ))}
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Quotes
