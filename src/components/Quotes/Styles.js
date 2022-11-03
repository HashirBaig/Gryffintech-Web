import styled from "styled-components"

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 300px;
`
export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  width: auto;
  height: auto;
  max-width: 900px;
  max-height: 300px;
  overflow: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`
