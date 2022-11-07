import styled from "styled-components"
import { colors, mediaQueries as media } from "../../const"

export const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin: 60px 0;
  text-align: center;
`

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 50px 0;

  ${media.lap} {
    display: block;
  }
`

export const StyledContactHeader = styled.h1`
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 0px;
  color: ${colors.dark};
`
export const StyledText = styled.p`
  color: ${colors.dark};
  font-weight: bold;
`

export const StyledInfoContainer = styled.div`
  width: 380px;
  height: 100%;
  & > div {
    margin: 10px 0;
  }
`

export const StyledGifContainer = styled.div`
  width: auto;
  height: auto;

  ${media.lap} {
    text-align: center;
    border: none;
  }
`
export const StyledGif = styled.img`
  position: relative;
  width: 450px;
  height: auto;

  ${media.palm} {
    width: 310px;
  }
`
