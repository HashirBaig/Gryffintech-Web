import styled from "styled-components"
import { colors, font } from "../../const"
import { Form, Field } from "formik"

export const StyledLabel = styled.label`
  color: ${colors.darker};
`
export const StyledForm = styled(Form)``

export const StyledField = styled(Field)`
  width: 100%;
  height: 40px;
  border: 2px solid ${colors.darker};
  padding: 0 10px;
  border-radius: 4px;
  box-shadow: none;
  outline: none;

  font-size: ${font.size.lg};
`

export const StyledButtonContainer = styled.div``
export const StyledButton = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 25px;
  border: 2px solid ${colors.dark};
  margin: 15px 0px;
  border-radius: 4px;
  color: ${colors.light};
  background-color: ${colors.dark};
  cursor: pointer;
  transition: all 0.3ms ease;
  :hover {
    border: 2px solid ${colors.dark};
    background-color: ${colors.light};
    color: ${colors.dark};
  }
`
