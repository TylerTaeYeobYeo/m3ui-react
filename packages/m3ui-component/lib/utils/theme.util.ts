import { CSSProperties } from "react";
import {
  COLOR_MODE,
  ColorPalette,
  ColorTheme,
  TonalPalette,
} from "../core/theme-provider/theme-setting/color/color.constant";
import { mixColor } from "./style.util";

const createLightTheme = (palette: TonalPalette): ColorTheme => ({
  // primary
  primary: palette.primary[40],
  onPrimary: palette.primary[100],
  primaryContainer: palette.primary[90],
  onPrimaryContainer: palette.primary[10],
  primaryFixed: palette.primary[90],
  primaryFiexedDim: palette.primary[80],
  onPrimaryFixed: palette.primary[10],
  onPrimaryFixedVariant: palette.primary[30],
  // secondary
  secondary: palette.secondary[40],
  onSecondary: palette.secondary[100],
  secondaryContainer: palette.secondary[90],
  onSecondaryContainer: palette.secondary[10],
  secondaryFixed: palette.secondary[90],
  secondaryFixedDim: palette.secondary[80],
  onSecondaryFixed: palette.secondary[10],
  onSecondaryFixedVariant: palette.secondary[30],
  // tertiary
  tertiary: palette.tertiary[40],
  onTertiary: palette.tertiary[100],
  tertiaryContainer: palette.tertiary[90],
  onTertiaryContainer: palette.tertiary[10],
  tertiaryFixed: palette.tertiary[90],
  tertiaryFixedDim: palette.tertiary[80],
  onTertiaryFixed: palette.tertiary[10],
  onTertiaryFixedVariant: palette.tertiary[30],
  // error
  error: palette.error[40],
  onError: palette.error[100],
  errorContainer: palette.error[90],
  onErrorContainer: palette.error[10],
  // surface
  surfaceDim: palette.neutral[87] ?? palette.neutral[90],
  surface: palette.neutral[98] ?? palette.neutral[100],
  surfaceBright: palette.neutral[98] ?? palette.neutral[100],
  surfaceContainerLowest: palette.neutral[100],
  surfaceContainerLow: palette.neutral[96] ?? palette.neutral[100],
  surfaceContainer: palette.neutral[94] ?? palette.neutral[90],
  surfaceContainerHigh: palette.neutral[92] ?? palette.neutral[90],
  surfaceContainerHighest: palette.neutral[90],
  onSurface: palette.neutral[10],
  onSurfaceVariant: palette.neutralVariant[30],
  // outline
  outline: palette.neutralVariant[50],
  outlineVariant: palette.neutralVariant[80],
  // inverse
  inverseSurface: palette.neutral[20],
  inverseOnSurface: palette.neutral[95],
  inversePrimary: palette.primary[80],
  // scrim
  scrim: palette.neutral[0],
  // shadow
  shadow: palette.neutral[0],
});

const createDarkTheme = (palette: TonalPalette): ColorTheme => ({
  // primary
  primary: palette.primary[80],
  onPrimary: palette.primary[20],
  primaryContainer: palette.primary[30],
  onPrimaryContainer: palette.primary[90],
  primaryFixed: palette.primary[90],
  primaryFiexedDim: palette.primary[80],
  onPrimaryFixed: palette.primary[10],
  onPrimaryFixedVariant: palette.primary[30],
  // secondary
  secondary: palette.secondary[80],
  onSecondary: palette.secondary[20],
  secondaryContainer: palette.secondary[30],
  onSecondaryContainer: palette.secondary[90],
  secondaryFixed: palette.secondary[90],
  secondaryFixedDim: palette.secondary[80],
  onSecondaryFixed: palette.secondary[10],
  onSecondaryFixedVariant: palette.secondary[30],
  // tertiary
  tertiary: palette.tertiary[80],
  onTertiary: palette.tertiary[20],
  tertiaryContainer: palette.tertiary[30],
  onTertiaryContainer: palette.tertiary[90],
  tertiaryFixed: palette.tertiary[90],
  tertiaryFixedDim: palette.tertiary[80],
  onTertiaryFixed: palette.tertiary[10],
  onTertiaryFixedVariant: palette.tertiary[30],
  // error
  error: palette.error[80],
  onError: palette.error[20],
  errorContainer: palette.error[30],
  onErrorContainer: palette.error[90],
  // surface
  surfaceDim: palette.neutral[6] ?? palette.neutral[10],
  surface: palette.neutral[6] ?? palette.neutral[10],
  surfaceBright: palette.neutral[24] ?? palette.neutral[20],
  surfaceContainerLowest: palette.neutral[4] ?? palette.neutral[0],
  surfaceContainerLow: palette.neutral[10],
  surfaceContainer: palette.neutral[12] ?? palette.neutral[10],
  surfaceContainerHigh: palette.neutral[17] ?? palette.neutral[20],
  surfaceContainerHighest: palette.neutral[22] ?? palette.neutral[20],
  onSurface: palette.neutral[90],
  onSurfaceVariant: palette.neutralVariant[80],
  // outline
  outline: palette.neutralVariant[60],
  outlineVariant: palette.neutralVariant[30],
  // inverse
  inverseSurface: palette.neutral[90],
  inverseOnSurface: palette.neutral[20],
  inversePrimary: palette.primary[40],
  // scrim
  scrim: palette.neutral[0],
  // shadow
  shadow: palette.neutral[0],
});

export const createTheme = (
  palette: TonalPalette,
  mode: COLOR_MODE = COLOR_MODE.LIGHT
) =>
  mode === COLOR_MODE.LIGHT
    ? createLightTheme(palette)
    : createDarkTheme(palette);

const black = "black";
const white = "white";

const mixColorByIndex = (color1: CSSProperties["color"], index: number) => {
  if (index === 0) return black;
  if (index === 100) return white;
  const isDark = index <= 50;
  const counterColor = isDark ? black : white;
  const ratio = isDark ? 100 - index * 2 : (100 - index) * 2;
  return mixColor(counterColor, color1 ?? "white", ratio);
};

export const createColorPalette = (
  color: CSSProperties["color"]
): ColorPalette =>
  new Array(101).reduce((acc, curr) => {
    acc[curr] = mixColorByIndex(color, curr);
    return acc;
  }, {} as Partial<ColorPalette>) as ColorPalette;
