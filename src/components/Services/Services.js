import React from "react"
import { StyledWapper, StyledServiceHeader, StyledServiceCardContainer } from "./Styles"
import Card from "../Card"
import { services } from "../../utils/common"

function Services({ executeScroll }) {
  return (
    <StyledWapper>
      <StyledServiceHeader>Our Services</StyledServiceHeader>
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
