import { CSSProperties } from "react";
import {
  COLOR_MODE,
  ColorPallete,
  ColorTheme,
  TonalPallete,
} from "../core/theme-provider/theme-setting/color/color.constant";

const createLightTheme = (pallete: TonalPallete): ColorTheme => ({
  // primary
  primary: pallete.primary[40],
  onPrimary: pallete.primary[100],
  primaryContainer: pallete.primary[90],
  onPrimaryContainer: pallete.primary[10],
  primaryFixed: pallete.primary[90],
  primaryFiexedDim: pallete.primary[80],
  onPrimaryFixed: pallete.primary[10],
  onPrimaryFixedVariant: pallete.primary[30],
  // secondary
  secondary: pallete.secondary[40],
  onSecondary: pallete.secondary[100],
  secondaryContainer: pallete.secondary[90],
  onSecondaryContainer: pallete.secondary[10],
  secondaryFixed: pallete.secondary[90],
  secondaryFixedDim: pallete.secondary[80],
  onSecondaryFixed: pallete.secondary[10],
  onSecondaryFixedVariant: pallete.secondary[30],
  // tertiary
  tertiary: pallete.tertiary[40],
  onTertiary: pallete.tertiary[100],
  tertiaryContainer: pallete.tertiary[90],
  onTertiaryContainer: pallete.tertiary[10],
  tertiaryFixed: pallete.tertiary[90],
  tertiaryFixedDim: pallete.tertiary[80],
  onTertiaryFixed: pallete.tertiary[10],
  onTertiaryFixedVariant: pallete.tertiary[30],
  // error
  error: pallete.error[40],
  onError: pallete.error[100],
  errorContainer: pallete.error[90],
  onErrorContainer: pallete.error[10],
  // surface
  surfaceDim: pallete.neutral[87] ?? pallete.neutral[90],
  surface: pallete.neutral[98] ?? pallete.neutral[100],
  surfaceBright: pallete.neutral[98] ?? pallete.neutral[100],
  surfaceContainerLowest: pallete.neutral[100],
  surfaceContainerLow: pallete.neutral[96] ?? pallete.neutral[100],
  surfaceContainer: pallete.neutral[94] ?? pallete.neutral[90],
  surfaceContainerHigh: pallete.neutral[92] ?? pallete.neutral[90],
  surfaceContainerHighest: pallete.neutral[90],
  onSurface: pallete.neutral[10],
  onSurfaceVariant: pallete.neutralVariant[30],
  // outline
  outline: pallete.neutralVariant[50],
  outlineVariant: pallete.neutralVariant[80],
  // inverse
  inverseSurface: pallete.neutral[20],
  inverseOnSurface: pallete.neutral[95],
  inversePrimary: pallete.primary[80],
  // scrim
  scrim: pallete.neutral[0],
  // shadow
  shadow: pallete.neutral[0],
});

const createDarkTheme = (pallete: TonalPallete): ColorTheme => ({
  // primary
  primary: pallete.primary[80],
  onPrimary: pallete.primary[20],
  primaryContainer: pallete.primary[30],
  onPrimaryContainer: pallete.primary[90],
  primaryFixed: pallete.primary[90],
  primaryFiexedDim: pallete.primary[80],
  onPrimaryFixed: pallete.primary[10],
  onPrimaryFixedVariant: pallete.primary[30],
  // secondary
  secondary: pallete.secondary[80],
  onSecondary: pallete.secondary[20],
  secondaryContainer: pallete.secondary[30],
  onSecondaryContainer: pallete.secondary[90],
  secondaryFixed: pallete.secondary[90],
  secondaryFixedDim: pallete.secondary[80],
  onSecondaryFixed: pallete.secondary[10],
  onSecondaryFixedVariant: pallete.secondary[30],
  // tertiary
  tertiary: pallete.tertiary[80],
  onTertiary: pallete.tertiary[20],
  tertiaryContainer: pallete.tertiary[30],
  onTertiaryContainer: pallete.tertiary[90],
  tertiaryFixed: pallete.tertiary[90],
  tertiaryFixedDim: pallete.tertiary[80],
  onTertiaryFixed: pallete.tertiary[10],
  onTertiaryFixedVariant: pallete.tertiary[30],
  // error
  error: pallete.error[80],
  onError: pallete.error[20],
  errorContainer: pallete.error[30],
  onErrorContainer: pallete.error[90],
  // surface
  surfaceDim: pallete.neutral[6] ?? pallete.neutral[10],
  surface: pallete.neutral[6] ?? pallete.neutral[10],
  surfaceBright: pallete.neutral[24] ?? pallete.neutral[20],
  surfaceContainerLowest: pallete.neutral[4] ?? pallete.neutral[0],
  surfaceContainerLow: pallete.neutral[10],
  surfaceContainer: pallete.neutral[12] ?? pallete.neutral[10],
  surfaceContainerHigh: pallete.neutral[17] ?? pallete.neutral[20],
  surfaceContainerHighest: pallete.neutral[22] ?? pallete.neutral[20],
  onSurface: pallete.neutral[90],
  onSurfaceVariant: pallete.neutralVariant[80],
  // outline
  outline: pallete.neutralVariant[60],
  outlineVariant: pallete.neutralVariant[30],
  // inverse
  inverseSurface: pallete.neutral[90],
  inverseOnSurface: pallete.neutral[20],
  inversePrimary: pallete.primary[40],
  // scrim
  scrim: pallete.neutral[0],
  // shadow
  shadow: pallete.neutral[0],
});

export const createTheme = (
  pallete: TonalPallete,
  mode: COLOR_MODE = COLOR_MODE.LIGHT
) =>
  mode === COLOR_MODE.LIGHT
    ? createLightTheme(pallete)
    : createDarkTheme(pallete);

const colorMix = (
  color1: CSSProperties["color"],
  color2: CSSProperties["color"],
  ratio: number
) => `color-mix(in srgb, ${color1} ${ratio}%, ${color2})`;
const black = "black";
const white = "white";

const colorMixByIndex = (color1: CSSProperties["color"], index: number) => {
  if (index === 0) return black;
  if (index === 100) return white;
  const isDark = index <= 50;
  const counterColor = isDark ? black : white;
  const ratio = isDark ? 100 - index * 2 : (100 - index) * 2;
  return colorMix(counterColor, color1, ratio);
};

export const createColorPallete = (
  color: CSSProperties["color"]
): ColorPallete =>
  new Array(101).reduce((acc, curr) => {
    acc[curr] = colorMixByIndex(color, curr);
    return acc;
  }, {} as Partial<ColorPallete>) as ColorPallete;
