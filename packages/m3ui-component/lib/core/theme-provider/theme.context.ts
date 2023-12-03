import { createContext } from "react";
import { Elevation } from "..";
import { Breakpoint } from "./theme-setting/breakpoint";
import {
  ColorConfig,
  ColorModeConfig,
} from "./theme-setting/color/color.constant";
import { TypographyConfig } from "./theme-setting/typography/typography.constant";

export type RootClassNameProps = {
  rootClassName?: string;
  classNamePrefix?: string;
};

export type ThemeContextType = RootClassNameProps &
  ColorModeConfig & {
    typography?: TypographyConfig;
    breakpoint?: Breakpoint;
    elevation?: Elevation;
  } & ColorConfig;

export const ThemeContext = createContext<ThemeContextType>({});

export default ThemeContext;
