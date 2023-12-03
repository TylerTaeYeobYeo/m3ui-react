import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { createColorPallete, createTheme } from "../../../../utils/theme.util";
import { RootClassNameProps } from "../../theme.context";
import {
  COLOR_MODE,
  ColorConfig,
  ColorModeConfig,
  defaultPallete,
} from "./color.constant";

export type ColorSettingProps = RootClassNameProps &
  ColorConfig &
  ColorModeConfig;
export const ColorSetting: FC<ColorSettingProps> = ({
  rootClassName,
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
          ${rootClassName ? `.${rootClassName}` : ":root"} {
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
    rootClassName,
  ]);
  return globalStyle;
};
