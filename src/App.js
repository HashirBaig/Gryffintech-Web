import React from "react"
import { StyledApp, RebootStyles } from "./global/Styles"

import Landing from "./pages/landing"

function App() {
  return (
    <>
      <RebootStyles />
      <StyledApp>
        <Landing />
      </StyledApp>
    </>
  )
}

export default App
