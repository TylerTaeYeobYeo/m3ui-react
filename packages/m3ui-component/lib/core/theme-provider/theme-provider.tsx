import { FC, PropsWithChildren } from "react";
import { ElevationSetting } from "..";
import { BreakpointSetting } from "./theme-setting/breakpoint";
import { ColorSetting } from "./theme-setting/color/color-setting";
import { CustomSetting } from "./theme-setting/custom/custom-setting";
import { ShapeSetting } from "./theme-setting/shape/shape-setting";
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
    rootClassName,
    classNamePrefix,
    shapeScale,
    ...other
  } = theme;
  const prefix = classNamePrefix ? `${classNamePrefix.trim()}-` : "";
  return (
    <ThemeContext.Provider value={{ ...theme, classNamePrefix: prefix }}>
      <BreakpointSetting
        rootClassName={rootClassName}
        classNamePrefix={prefix}
        breakpoint={breakpoint}
      />
      <ElevationSetting
        rootClassName={rootClassName}
        classNamePrefix={prefix}
        elevation={elevation}
        mode={mode}
      />
      <CustomSetting
        rootClassName={rootClassName}
        classNamePrefix={prefix}
        classes={classes}
        customStyles={customStyles}
      />
      <ColorSetting
        {...other}
        rootClassName={rootClassName}
        classNamePrefix={prefix}
        mode={mode}
      >
        <TypographySetting
          rootClassName={rootClassName}
          classNamePrefix={prefix}
          {...typography}
        >
          <ShapeSetting
            rootClassName={rootClassName}
            classNamePrefix={prefix}
            shapeScale={shapeScale}
          >
            {children}
          </ShapeSetting>
        </TypographySetting>
      </ColorSetting>
    </ThemeContext.Provider>
  );
};
