import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import {
  COLOR_MODE,
  ColorConfig,
  ColorModeConfig,
  defaultPallete,
} from "../../core/color/color.constant";
import { createColorPallete, createTheme } from "../../utils/color.util";

export type ColorSettingProps = ColorConfig & ColorModeConfig;
export const ColorSetting: FC<ColorSettingProps> = ({
  mode = COLOR_MODE.LIGHT,
  theme,
  darkTheme,
  primary,
  secondary,
  tertiary,
  error,
  neutral,
  neutralVariant,
}) => {
  const themeClassName: string | undefined = "test";
  const globalStyle: ReactElement = useMemo(() => {
    const determineTheme = () => {
      const isLight = mode === COLOR_MODE.LIGHT;
      if (primary) {
        return createTheme(
          {
            primary: createColorPallete(primary),
            secondary: secondary
              ? createColorPallete(secondary)
              : defaultPallete.secondary,
            tertiary: tertiary
              ? createColorPallete(tertiary)
              : defaultPallete.tertiary,
            error: error ? createColorPallete(error) : defaultPallete.error,
            neutral: neutral
              ? createColorPallete(neutral)
              : defaultPallete.neutral,
            neutralVariant: neutralVariant
              ? createColorPallete(neutralVariant)
              : defaultPallete.neutralVariant,
          },
          mode
        );
      } else if (theme) {
        return isLight ? theme : darkTheme ?? theme;
      } else {
        return createTheme(defaultPallete, mode);
      }
    };
    return (
      <Global
        styles={css`
          ${themeClassName ? `.${themeClassName}` : ":root"} {
            ${Object.entries(determineTheme())
              .map(([key, value]) => `--${key}: ${value}`)
              .join(";\n")}
          }
        `}
      />
    );
  }, [
    mode,
    theme,
    darkTheme,
    primary,
    secondary,
    tertiary,
    error,
    neutral,
    neutralVariant,
  ]);
  return globalStyle;
};
