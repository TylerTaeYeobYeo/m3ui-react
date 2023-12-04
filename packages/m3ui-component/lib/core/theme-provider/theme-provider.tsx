import { FC, PropsWithChildren } from "react";
import { ElevationSetting } from "..";
import { BreakpointSetting } from "./theme-setting/breakpoint";
import { ColorSetting } from "./theme-setting/color/color-setting";
import { CustomSetting } from "./theme-setting/custom/custom-setting";
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
  const {
    typography,
    breakpoint,
    elevation,
    mode,
    classes,
    customStyles,
    classNamePrefix,
    ...other
  } = theme;
  const prefix = classNamePrefix ? `${classNamePrefix.trim()}-` : "";
  const value = {
    typography,
    breakpoint,
    elevation,
    mode,
    classes,
    customStyles,
    classNamePrefix: prefix,
    ...other,
  };
  return (
    <ThemeContext.Provider value={value}>
      <TypographySetting classNamePrefix={prefix} {...typography} />
      <BreakpointSetting classNamePrefix={prefix} breakpoint={breakpoint} />
      <ElevationSetting
        classNamePrefix={prefix}
        elevation={elevation}
        mode={mode}
      />
      <CustomSetting
        {...other}
        classNamePrefix={prefix}
        classes={classes}
        customStyles={customStyles}
      />
      <ColorSetting {...other} classNamePrefix={prefix} mode={mode}>
        {children}
      </ColorSetting>
    </ThemeContext.Provider>
  );
};
