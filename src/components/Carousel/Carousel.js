import React from "react"
import Marquee from "react-fast-marquee"
import Tada from "react-reveal/Tada"
import {
  StyledCarousel,
  StyledHeaderContainer,
  StyledHeader,
  StyledHeaderSpan,
  StyledCardContainer,
  StyledContainer,
} from "./Styles"
import QuoteCard from "../QuoteCard"
import { clientQuotes } from "../../utils/common"

function Carousel() {
  return (
    <StyledCarousel>
      <StyledHeaderContainer>
        <StyledHeader>
          <Tada>
            <StyledHeaderSpan>500+</StyledHeaderSpan>
          </Tada>
          Clients
        </StyledHeader>
        <StyledHeader>Trusted On Us</StyledHeader>
      </StyledHeaderContainer>
      <StyledContainer>
        <StyledCardContainer>
          <Marquee style={{ height: "300px" }}>
            {clientQuotes.map((data, idx) => (
              <QuoteCard key={`quote-card-${idx}`} {...data} />
            ))}
          </Marquee>
        </StyledCardContainer>
      </StyledContainer>
    </StyledCarousel>
  )
}

export default Carousel
