import React from "react"
import { ErrorMessage, Field } from "formik"
import { StyledInput, StyledField, StyledLabel, StyledSelectContainer, StyledErrorMessage } from "./Styles"
import RequireFieldMark from "../RequiredFieldMark"
import { services } from "../../utils/common"
import { colors, font } from "../../const"

const dimensions = { width: "auto", height: "40px" }
const style = {
  lineHeight: "normal",
  outline: "none",
  border: `2px solid ${colors.dark}`,
  borderRadius: "4px",
  backgroundColor: "transparent",
  padding: "2px 10px",
  fontSize: font.size.md,
}
const textAreaStyles = {
  height: "150px",
  fontSize: "14px",
  padding: "10px 10px",
  fontFamily: "Helvetica, sans-sarif",
  ...style,
}

function FormikControl(props) {
  const { control, label, name, ...rest } = props

  switch (control) {
    case "input":
      return (
        <StyledInput>
          <StyledLabel>
            {label}
            <RequireFieldMark />
          </StyledLabel>
          <StyledField name={name} {...rest} />
          <ErrorMessage name={name} component={StyledErrorMessage} />
        </StyledInput>
      )
    case "textarea":
      return (
        <StyledInput>
          <StyledLabel>{label}</StyledLabel>
          <Field as="textarea" name={name} style={textAreaStyles} {...rest} />
        </StyledInput>
      )
    case "select":
      return (
        <StyledSelectContainer>
          <StyledLabel>{label}</StyledLabel>
          <Field as="select" name={name} style={{ ...dimensions, ...style }} {...rest}>
            {services.map((service, idx) => (
              <option value={service.label} key={`service-${service.value}-${idx}`}>
                {service.label}
              </option>
            ))}
          </Field>
        </StyledSelectContainer>
      )

    default:
      return null
  }
}

export default FormikControl
