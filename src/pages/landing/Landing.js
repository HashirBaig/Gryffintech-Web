import React from "react"
import { StyledWrapper } from "./Styles"

import Header from "../../components/layouts/home"
import Carousel from "../../components/Carousel"
import Services from "../../components/Services"
import Contact from "../../components/Contact"

function Landing() {
  return (
    <StyledWrapper>
      {/*
      - Contact us form
      - Footer
    */}
      <Header />
      <Carousel />
      <Services />
      <Contact />
    </StyledWrapper>
  )
}

export default Landing
