import { css } from "styled-components"

const breakPoints = {
  ultrawide: 1440,
  cinema: 1280,
  desktop: 1024,
  lap: 720,
  palm: 480,
}

export const media = Object.keys(breakPoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakPoints[label] / 16

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
