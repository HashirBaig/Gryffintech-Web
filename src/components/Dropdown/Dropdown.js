import React, { Fragment } from "react"
import { StyledDropdown } from "./Styles"

import TreeItem from "../TreeItem"

function Dropdown({ tree }) {
  const createTree = branch => {
    return (
      <TreeItem label={branch?.label} link={branch?.link}>
        {branch?.branches?.map((branch, idx) => (
          <Fragment key={`Tree-item-${idx}`}>{createTree(branch)}</Fragment>
        ))}
      </TreeItem>
    )
  }

  return (
    <StyledDropdown>
      {tree?.map((branch, idx) => {
        return <Fragment key={`dropdown-${idx}`}>{createTree(branch)}</Fragment>
      })}
    </StyledDropdown>
  )
}

export default Dropdown
