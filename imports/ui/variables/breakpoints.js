const breakpoints = {
  desktop: 1000,
  tablet:  700,
  mobile:  480,
};

const mediaBreakpoints = {
  min: {
    desktop:  `@media(min-width: ${breakpoints.desktop}px)`,
    tablet:   `@media(min-width: ${breakpoints.tablet}px)`,
    mobile:   `@media(min-width: ${breakpoints.mobile}px)`,
  },
  
  max: {
    desktop:  `@media(max-width: ${breakpoints.desktop}px)`,
    tablet:   `@media(max-width: ${breakpoints.tablet}px)`,
    mobile:   `@media(max-width: ${breakpoints.mobile}px)`,
  }
};

export { breakpoints, mediaBreakpoints };