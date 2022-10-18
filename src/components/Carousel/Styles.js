import styled from "styled-components"
import { colors, font } from "../../const"

export const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 60px 0px;

  @media screen and (max-width: 720px) {
    display: block;
  }
`
export const StyledCarouselContainer = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 720px) {
    width: auto;
  }
`

export const StyledHeading = styled.h1`
  margin-bottom: 0px;
  font-size: ${font.size.xxxl};
  font-weight: 800;
  color: ${colors.dark};

  @media screen and (max-width: 530px) {
    text-align: center;
  }
`
export const StyledParagrah = styled.p`
  @media screen and (max-width: 720px) {
    text-align: center;
  }
  font-size: 18px;
  color: ${colors.dark};
`

export const StyledButton = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 25px;
  border: none;
  margin: 15px 0px;
  border-radius: 4px;
  color: ${colors.light};
  background-color: ${colors.seconday};
  cursor: pointer;

  :hover {
    background-color: ${colors.darker};
    color: ${colors.light};
    transition: all 0.3s ease;
  }
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

  @media screen and (max-width: 720px) {
    display: none;
  }
`
export const StyledGifContainer = styled.div`
  border: 4px dotted ${colors.darker};
  border-radius: 50%;
  padding: 15px;

  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`
export const StyledGif = styled.img`
  position: relative;
  width: 300px;
  height: auto;
  border-radius: 50%;
  background: transparent;
`
