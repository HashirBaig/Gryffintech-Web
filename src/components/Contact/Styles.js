import styled from "styled-components"
import { colors } from "../../const"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 720px) {
    display: block;
  }
`
export const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 60px 0;
  text-align: center;
`
export const StyledContactHeader = styled.h1`
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 0px;
  color: ${colors.font.darker};
`
export const StyledText = styled.p`
  color: ${colors.font.darker};
  font-weight: bold;
`

export const StyledInfoContainer = styled.div`
  width: 380px;
  height: 100%;
  & > div {
    margin: 20px 0;
  }
`

export const StyledInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: bold;
  color: ${colors.dark};
  gap: 30px;

  @media screen and (max-width: 720px) {
    display: block;
  }
`

export const StyledGifContainer = styled.div`
  width: auto;
  height: auto;
  border: 4px dotted ${colors.darker};
  border-radius: 50%;
  padding: 15px;

  @media screen and (max-width: 720px) {
    text-align: center;
    border: none;
  }
`
export const StyledGif = styled.img`
  position: relative;
  width: 340px;
  height: auto;
  border-radius: 50%;
`

export const StyledIconContainer = styled.div`
  width: auto;
  height: auto;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`
export const StyledIcon = styled.i`
  color: ${colors.seconday};
`
