import styled, { createGlobalStyle } from "styled-components/macro"
import { colors } from "../const"

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`

export const RebootStyles = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body{
    left: 0;
    top: 0;
    margin: 0;
    font-family: "Helvetica", sans-sarif;
    text-decoration: none;
    background-color: ${colors.white};
  }
`
