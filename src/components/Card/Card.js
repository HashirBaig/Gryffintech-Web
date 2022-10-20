import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"
import {
  StyledCard,
  StyledCardHeader,
  StyledIconContainer,
  StyledCardIcon,
  StyledImg,
  StyledContainer,
  StyledText,
  StyledTextContainer,
} from "./Styles"

function Card({ header, src, label, description, executeScroll }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  const [isImgVisible, setIsImgVisible] = useState(true)

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible)
    setIsImgVisible(!isImgVisible)
  }

  return (
    <StyledCard>
      <Pulse>
        <StyledCardHeader>{header}</StyledCardHeader>
      </Pulse>
      {isImgVisible && (
        <Fade>
          <StyledImg src={src} alt={label} />
        </Fade>
      )}

      {isDescriptionVisible && (
        <Fade bottom cascade>
          <StyledTextContainer>
            <StyledText>{description}</StyledText>
          </StyledTextContainer>
        </Fade>
      )}
      <Fade bottom cascade>
        <StyledContainer>
          <StyledIconContainer onClick={executeScroll} title="Contact us">
            <StyledCardIcon className="far fa-envelope"></StyledCardIcon>
          </StyledIconContainer>

          <StyledIconContainer onClick={toggleDescription} title="Read description" id="read">
            <StyledCardIcon className="far fa-newspaper"></StyledCardIcon>
          </StyledIconContainer>
        </StyledContainer>
      </Fade>
    </StyledCard>
  )
}

export default Card
