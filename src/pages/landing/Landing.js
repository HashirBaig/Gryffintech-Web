import React, { useRef } from "react"
import { StyledWrapper } from "./Styles"

import Header from "../../components/layouts/home"
import Carousel from "../../components/Carousel"
import Services from "../../components/Services"
import Contact from "../../components/Contact"
import Footer from "../../components/layouts/footer"

function Landing() {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <StyledWrapper>
      <Header />
      <Carousel executeScroll={executeScroll} />
      <Services />
      <Contact myRef={myRef} />
      <Footer />
    </StyledWrapper>
  )
}

export default Landing
