import { FC, PropsWithChildren } from "react";
import { ElevationSetting } from "..";
import { BreakpointSetting } from "./theme-setting/breakpoint";
import { ColorSetting } from "./theme-setting/color/color-config";
import { TypographySetting } from "./theme-setting/typography";
import { ThemeContext, ThemeContextType } from "./theme.context";

export type ThemeProviderProps = PropsWithChildren<{
  /**
   * @description
   * if css narrowing is needed use this
   * when undefined, css narrowing will not be applied (default)
   */
  theme: ThemeContextType;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  const { typography, breakpoint, elevation, mode, ...other } = theme;
  return (
    <ThemeContext.Provider value={theme}>
      <TypographySetting {...typography} />
      <ColorSetting {...other} mode={mode} />
      <BreakpointSetting breakpoint={breakpoint} />
      <ElevationSetting elevation={elevation} mode={mode} />
      {children}
    </ThemeContext.Provider>
  );
};
