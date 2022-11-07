import styled from "styled-components"
import { Field } from "formik"
import { colors, font } from "../../const"

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const StyledLabel = styled.label`
  color: ${colors.dark};
  font-weight: 700;
`
export const StyledField = styled(Field)`
  width: auto;
  height: 40px;
  line-height: normal;
  outline: none;
  border: 2px solid ${colors.secondary};
  border-radius: 4px;
  background-color: transparent;
  padding: 2px 10px;
  font-size: ${font.size.md};
`
export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const StyledSelect = styled.select`
  width: auto;
  height: 40px;
  line-height: normal;
  outline: none;
  border: 2px solid ${colors.secondary};
  border-radius: 4px;
  background-color: transparent;
  padding: 2px 10px;
  font-size: ${font.size.md};
`
export const StyledErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.danger};
  transition: 0.2s ease-out all;
  margin: 0px;
  padding: 0px;
`
