import React from "react"
import { StyledWrapper } from "./Styles"

import Header from "../../components/layouts/home"
import Carousel from "../../components/Carousel"
import Services from "../../components/Services"

function Landing() {
  return (
    <StyledWrapper>
      {/*
      - Header (Done)
      - Caseroul
      - Service Cards
      - Contact us form
      - Footer
    */}
      <Header />
      <Carousel />
      <Services />
    </StyledWrapper>
  )
}

export default Landing
