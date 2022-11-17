import styled from "styled-components"

const loaderSizes = {
  sm: "25px",
  md: "35px",
  lg: "45px",
  xl: "55px",
  "2xl": "65px",
}

const getLoaderSize = size => {
  if (!size) return loaderSizes.sm
  return loaderSizes[size]
}

export const StyledWrapper = styled.div`
  width: fit;
  height: fit;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledImg = styled.img`
  width: ${({ size }) => getLoaderSize(size)};
  height: auto;
  padding-top: 2px;
`
