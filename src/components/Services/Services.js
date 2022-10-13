import React from "react"
import { StyledWapper, StyledServiceHeader, StyledServiceCardContainer } from "./Styles"
import Card from "../Card"
import { services } from "../../utils/common"

function Services() {
  return (
    <StyledWapper>
      <StyledServiceHeader>Our Services</StyledServiceHeader>
      <StyledServiceCardContainer>
        {services.map(({ label, description, icon }, idx) => (
          <Card key={`Card-${label}-${idx}`} header={label} description={description} icon={icon} />
        ))}
      </StyledServiceCardContainer>
    </StyledWapper>
  )
}

export default Services
