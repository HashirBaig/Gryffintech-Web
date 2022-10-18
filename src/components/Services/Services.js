import React from "react"
import { StyledWapper, StyledHeader, StyledServiceCardContainer } from "./Styles"
import Card from "../Card"
import { services } from "../../utils/common"

function Services({ executeScroll }) {
  return (
    <StyledWapper>
      <StyledHeader>Our Services</StyledHeader>
      <StyledServiceCardContainer>
        {services.map(({ label, description, src }, idx) => {
          return (
            <Card
              key={idx}
              header={label}
              description={description}
              src={src}
              label={label}
              executeScroll={executeScroll}
            />
          )
        })}
      </StyledServiceCardContainer>
    </StyledWapper>
  )
}

export default Services
