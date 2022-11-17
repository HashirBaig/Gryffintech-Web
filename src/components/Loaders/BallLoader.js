import React from "react"
import { StyledWrapper, StyledImg } from "./Styles"

function BallLoader(props) {
  const { size } = props
  return (
    <StyledWrapper>
      <StyledImg size={size} src="/assets/gifs/custom-loaders/ball-loader.gif" alt="ball loader" />
    </StyledWrapper>
  )
}

export default BallLoader
