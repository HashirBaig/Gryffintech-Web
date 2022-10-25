import React from "react"
import {
  StyledFooter,
  // StyledSummaryContainer,
  // StyledSummarySpan,
  // StyledSocialMediaContainer,
  // StyledSocialMediaText,
  // StyledSocialMediaIconContainer,
  // StyledSocialMediaIcon,
  StyledFooterText,
  StyledFooterTextIcon,
} from "./Styles"
// import { navMenu } from "../../../utils/common"

function Footer() {
  return (
    <StyledFooter>
      {/* <StyledSummaryContainer>
        {navMenu.map((item, idx) => (
          <StyledSummarySpan key={`summary-item-${idx}`}>{item?.label}</StyledSummarySpan>
        ))}
      </StyledSummaryContainer> */}
      {/* <StyledSocialMediaContainer>
        <StyledSocialMediaText>Follow Us</StyledSocialMediaText>
        <StyledSocialMediaIconContainer>
          <StyledSocialMediaIcon className="fab fa-facebook"></StyledSocialMediaIcon>
          <StyledSocialMediaIcon className="fab fa-instagram"></StyledSocialMediaIcon>
          <StyledSocialMediaIcon className="fab fa-youtube"></StyledSocialMediaIcon>
        </StyledSocialMediaIconContainer>
      </StyledSocialMediaContainer> */}
      <StyledFooterText>
        <StyledFooterTextIcon className="far fa-copyright"></StyledFooterTextIcon>
        2022 GRYFFIN TECH - ISLAMABAD PAKISTAN
      </StyledFooterText>
    </StyledFooter>
  )
}

export default Footer
