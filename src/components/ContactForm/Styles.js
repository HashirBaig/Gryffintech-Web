import styled from "styled-components"
import { colors, font } from "../../const"
import { media } from "../../utils/shapes/mediaQueryHelper"
import { Form, Field } from "formik"

export const StyledLabel = styled.label`
  color: ${colors.darker};
  font-weight: 400;
`
export const StyledForm = styled(Form)`
  // margin-top: 280px;
  padding: 10px;
`
export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0px;
`
export const StyledFormNameContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const StyledField = styled(Field)`
  width: 100%;
  height: 40px;
  line-height: normal;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0px 10px;
  background-color: ${colors.light};
`

export const StyledButtonContainer = styled.div`
  text-align: right;
`
export const StyledButton = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid ${colors.dark};
  border-radius: 4px;
  color: ${colors.light};
  background-color: ${colors.dark};
  cursor: pointer;
  transition: all 0.3ms ease;

  :placeholder {
    font-size: ${font.size.xl};
  }

  :hover {
    border: 2px solid ${colors.dark};
    background-color: ${colors.light};
    color: ${colors.dark};
  }

  ${media.desktop`
      padding: 10px 25px;
      margin: 15px -17px 15px 0px;
  `}
`
