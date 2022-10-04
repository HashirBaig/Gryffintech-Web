import styled from "styled-components/macro"

export const StyledHeader = styled.div`
  position: sticky;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background-color: white;
  box-shadow: 0rem 0.1rem 0.5rem gray;
  z-index: 100;
`
export const StyledLogo = styled.div`
  font-weight: 800;
  font-size: 2rem;
`
export const StyledNavBar = styled.div`
  display: flex;
  gap: 3rem;
`
export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem 0 0 0;
  padding: 0.2rem 0rem;
  border-bottom: 5px solid white;
  transition: all 0.4s ease;
  :hover {
    cursor: pointer;
    border-bottom: 5px solid rgb(50, 50, 50);
  }
`
export const StyledI = styled.i`
  margin-left: 0.4rem;
  margin-top: -7px;
`

export const StyledSpan = styled.span``

export const StyledDropdown = styled.span``
