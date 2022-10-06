import React from "react"
import { StyledWrapper } from "./Styles"

import Header from "../../components/layouts/home"
import Carousel from "../../components/Carousel"
import Services from "../../components/Services"
import Contact from "../../components/Contact"
import Footer from "../../components/layouts/footer"

function Landing() {
  return (
    <StyledWrapper>
      <Header />
      <Carousel />
      <Services />
      <Contact />
      <Footer />
    </StyledWrapper>
  )
}

export default Landing
