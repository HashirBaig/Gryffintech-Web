import React, { useRef } from "react"
import { StyledWrapper } from "./Styles"

import Header from "../../components/layouts/home"
import Banner from "../../components/Banner"
import Services from "../../components/Services"
import Carousel from "../../components/Carousel"
import Contact from "../../components/Contact"
import Footer from "../../components/layouts/footer"

function Landing() {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <StyledWrapper>
      <Header />
      <Banner executeScroll={executeScroll} />
      <Services executeScroll={executeScroll} />
      <Carousel />
      <Contact myRef={myRef} />
      <Footer />
    </StyledWrapper>
  )
}

export default Landing
