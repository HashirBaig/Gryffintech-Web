import styled from "styled-components"
import { colors, font, mediaQueries as media } from "../../const"

export const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0px 30px 0px;

  ${media.lap} {
    display: block;
  }
`
export const StyledContainer = styled.div`
  max-width: 450px;
  max-height: 500px;
  text-align: left;
  box-shadow: 4px 4px 4px ${colors.shadow};
  color: ${colors.dark};
  border-radius: 15px;
  padding: 40px 30px;
  overflow: hidden;

  ${media.lap} {
    width: auto;
    text-align: center;
  }
`

export const StyledHeading = styled.h1`
  margin-bottom: 0px;
  font-size: ${font.size.xxxl};
  font-weight: 600;
  color: ${colors.dark};

  @media ${media.lap} {
    text-align: center;
  }
`
export const StyledParagrah = styled.p`
  ${media.lap} {
    text-align: center;
  }
  font-size: 18px;
`

export const StyledButtonContainer = styled.div`
  height: auto;
  width: 100%;
`

export const StyledButton = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 30px;
  border: none;
  margin: 15px 0px;
  color: ${colors.white};
  background: linear-gradient(130deg, #5f4b8b, #e69a8d);
  cursor: pointer;
  transition: all 0.3s ease;
`
export const StyledIcon = styled.i`
  font-size: ${font.size.icon};
  margin-left: 8px;
`
export const StyledBg = styled.div``
export const StyledBgImgContainer = styled.div``
export const StyledBgImg = styled.img`
  position: fixed;
  width: 100%;
  height: auto;
  margin-top: -150px;
  background-repeat: no-repeat;

  ${media.lap} {
    display: none;
  }
`
export const StyledGifContainer = styled.div`
  ${media.lap} {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`
export const StyledGif = styled.img`
  position: relative;
  width: 400px;
  height: auto;
`
