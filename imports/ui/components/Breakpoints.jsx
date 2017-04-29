import React from 'react';
import { layoutGenerator } from 'react-break';
import breakpoints from '../constants/breakpoints.js';

const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 1000,
});

export const Mobile = layout.is('mobile');
export const Tablet = layout.is('tablet');
export const Desktop = layout.is('desktop');