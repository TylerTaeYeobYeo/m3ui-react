import { Global, css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { createColorPalette, createTheme } from "../../../../utils/theme.util";
import { RootClassNameProps } from "../../theme.context";
import {
  COLOR_MODE,
  ColorConfig,
  ColorModeConfig,
  defaultPalette,
} from "./color.constant";
import { ColorContext } from "./color.context";

export type ColorSettingProps = PropsWithChildren<
  RootClassNameProps & ColorConfig & ColorModeConfig
>;
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
  children,
}) => {
  const isLight = mode === COLOR_MODE.LIGHT;
  const palette = primary
    ? {
        primary: createColorPalette(primary),
        secondary: secondary
          ? createColorPalette(secondary)
          : defaultPalette.secondary,
        tertiary: tertiary
          ? createColorPalette(tertiary)
          : defaultPalette.tertiary,
        error: error ? createColorPalette(error) : defaultPalette.error,
        neutral: neutral ? createColorPalette(neutral) : defaultPalette.neutral,
        neutralVariant: neutralVariant
          ? createColorPalette(neutralVariant)
          : defaultPalette.neutralVariant,
      }
    : undefined;
  const color = theme
    ? isLight
      ? theme
      : darkTheme ?? theme
    : createTheme(palette ?? defaultPalette, mode);

  return (
    <>
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            ${Object.entries(color)
              .map(([key, value]) => `--${key}: ${value}`)
              .join(";\n")}
          }
          .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 600, "GRAD" 0, "opsz" 48;
          }
        `}
      />
      <ColorContext.Provider
        value={{
          mode,
          palette: palette ?? defaultPalette,
          color,
        }}
      >
        {children}
      </ColorContext.Provider>
    </>
  );
};
