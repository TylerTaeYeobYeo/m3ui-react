export const convertPxToRem = (px: number) =>
  px / parseFloat(getComputedStyle(document.documentElement).fontSize);
export const convertRemToPx = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
