import { TypographyConfig } from "lib/provider/typography/typography.constant";
import { createContext } from "react";
import { ColorConfig, ColorModeConfig } from "../color/color.constant";

export type ThemeContextType = ColorModeConfig & {
  typography?: TypographyConfig;
  /**
   * breakpoints are calculated less than
   */
  breakpoint?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    // xl: number;
  };
} & ColorConfig;

export const ThemeContext = createContext<ThemeContextType>({});

export default ThemeContext;
