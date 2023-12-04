/**
 * breakpoints are calculated with greater than or equal to
 * @default
 * ```
 * {
 *  xs: 0,
 *  sm: 600,
 *  md: 905,
 *  lg: 1240,
 *  xl: 1440,
 * }
 * ```
 */
export type Breakpoint = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export const defaultBreakpoint: Breakpoint = {
  xs: 0,
  sm: 600,
  md: 905,
  lg: 1240,
  xl: 1440,
};
