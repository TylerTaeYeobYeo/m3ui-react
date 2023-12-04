import { useContext } from "react";
import { defaultBreakpoint } from "../theme-setting/breakpoint/breakpoint.constant";
import { ColorContext } from "../theme-setting/color/color.context";
import { defaultElevation } from "../theme-setting/elevation/elevation.constant";
import { ThemeContext } from "../theme.context";

export const useTheme = () => {
  const { classNamePrefix, typography, breakpoint, elevation } =
    useContext(ThemeContext);
  const { palette, color, mode } = useContext(ColorContext);
  return {
    classNamePrefix: classNamePrefix ?? "",
    // color token
    mode,
    palette,
    color,
    // typography token
    typography,
    // breakpoint token
    breakpoint: breakpoint ?? defaultBreakpoint,
    // elevation token
    elevation: elevation ?? defaultElevation[mode],
  };
};
