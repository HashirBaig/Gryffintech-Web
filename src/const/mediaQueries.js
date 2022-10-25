const breakPoints = {
  ultrawide: 1440,
  cinema: 1280,
  desktop: 1024,
  lap: 720,
  palm: 480,
}

const mediaQueries = {
  palm: `@media screen and (max-width: ${breakPoints.palm}px)`,
  lap: `@media screen and (max-width: ${breakPoints.lap}px)`,
  desktop: `@media screen and (max-width: ${breakPoints.desktop}px)`,
  cinema: `@media screen and (max-width: ${breakPoints.cinema}px)`,
  ultrawide: `@media screen and (max-width: ${breakPoints.ultrawide}px)`,
}
export default mediaQueries
