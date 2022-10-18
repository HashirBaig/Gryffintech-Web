import styled from "styled-components"
import { colors, font } from "../../const"
import { Form, Field } from "formik"

export const StyledForm = styled(Form)`
  @media screen and (max-width: 720px) {
    height: 100%;
    width: auto;
  }

  height: 100%;
  width: auto;
  padding: 30px 35px;
  background-color: white;
  border-radius: 4px;
  line-height: 37px;
  filter: drop-shadow(0px 0px 10px ${colors.shadow});
`
export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const StyledNameContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: block;
  }

  display: flex;
  text-align: left;
  gap: 20px;
`
export const StyledFirstNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledLastNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
  color: ${colors.font.dark};
  font-weight: 700;
`
export const StyledField = styled(Field)`
  width: auto;
  height: 40px;
  line-height: normal;
  outline: none;
  border: 2px solid ${colors.border.primary};
  border-radius: 4px;
  background-color: transparent;
  padding: 2px 10px;
  font-size: ${font.size.md};
`

export const StyledSelect = styled.select`
  width: auto;
  height: 45px;
  line-height: normal;
  outline: none;
  border: 2px solid ${colors.border.primary};
  border-radius: 4px;
  background-color: inherit;
  color: ${colors.dark};
  & > option {
    padding: 15px 0px;
    font-size: ${font.size.lg};
    &:hover {
      background: green;
    }
  }
`

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0px;
`
export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid ${colors.seconday};
  border-radius: 4px;
  color: ${colors.light};
  background-color: ${colors.seconday};
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    border: 2px solid ${colors.dark};
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`
export const StyledErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.message.error};
  transition: 0.2s ease-out all;
  margin: 0px;
  padding: 0px;
`
