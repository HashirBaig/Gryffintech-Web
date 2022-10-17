import styled from "styled-components"

export const StyledDropdown = styled.div`
  ${({ isMobileOrTabletView }) =>
    !isMobileOrTabletView
      ? `
      position: absolute;
      top: 50px;
      `
      : ``}
  min-width: 250px;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 4px;
  background-color: white;
  line-height: 25px;
  padding: 7px;

  @media screen and (max-width: 720px) {
    padding: 5px;
    margin: 5px;
    border: none;
    top: 0;
  }
`
