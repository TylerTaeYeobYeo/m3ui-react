import { FC, PropsWithChildren } from "react";
import { ColorSetting } from "../color/color-config";
import { TypographySetting } from "../typography";
import { ThemeContext, ThemeContextType } from "./theme.context";

export type ThemeProviderProps = PropsWithChildren<{
  /**
   * @description
   * if css narrowing is needed use this
   * when undefined, css narrowing will not be applied (default)
   */
  rootClassName?: string;
  theme: ThemeContextType;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  const { typography, ...other } = theme;
  return (
    <ThemeContext.Provider value={theme}>
      <TypographySetting {...typography} />
      <ColorSetting {...other} />
      {children}
    </ThemeContext.Provider>
  );
};
