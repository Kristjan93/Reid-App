// Numbers represent screen width in px.
const breakpoints = {
  desktop: { width: 1024, breakpoint: 'desktop' },
  tablet:  { width: 767,  breakpoint: 'tablet'  },
  mobile:  { width: 480,  breakpoint: 'mobile'  },
};

function setBreakpoints (width) {
  if (width <= breakpoints.mobile.width)       return { breakpoint: breakpoints.mobile.breakpoint  }; 
  else if (width < breakpoints.desktop.width)  return { breakpoint: breakpoints.tablet.breakpoint  };
  else                                         return { breakpoint: breakpoints.desktop.breakpoint };
};

export { setBreakpoints };