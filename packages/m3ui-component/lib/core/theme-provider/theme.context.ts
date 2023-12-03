import { createContext } from "react";
import { TypographyConfig } from "../../core/typography/typography.constant";
import { Breakpoint } from "../breakpoint";
import { ColorConfig, ColorModeConfig } from "../color/color.constant";

export type RootClassNameProps = {
  rootClassName?: string;
};

export type ThemeContextType = RootClassNameProps &
  ColorModeConfig & {
    typography?: TypographyConfig;
    breakpoint?: Breakpoint;
  } & ColorConfig;

export const ThemeContext = createContext<ThemeContextType>({});

export default ThemeContext;
