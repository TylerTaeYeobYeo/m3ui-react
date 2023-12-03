import { CSSProperties } from "react";

export enum COLOR_DIVIERSION_TYPE {
  DEFAULT = "default",
  ON = "on",
  CONTAINER = "container",
  ON_CONTAINER = "on-container",
  FIXED = "fixed",
  ON_FIXED = "on-fixed",
  FIXED_DIM = "fixed-dim",
  ON_FIXED_VARIANT = "on-fixed-variant",
  CONTAINER_LOWEST = "container-lowest",
  CONTAINER_LOW = "container-low",
  CONTAINER_HIGH = "container-high",
  CONTAINER_HIGHEST = "container-highest",
  ON_VARIANT = "on-variant",
  INVERSE = "inverse",
  INVERSE_ON = "inverse-on",
  INVERSE_PRIMARY = "inverse-primary",
}

export interface ColorTheme {
  // primary
  primary: CSSProperties["color"];
  onPrimary: CSSProperties["color"];
  primaryContainer: CSSProperties["color"];
  onPrimaryContainer: CSSProperties["color"];
  primaryFixed: CSSProperties["color"];
  onPrimaryFixed: CSSProperties["color"];
  primaryFiexedDim: CSSProperties["color"];
  onPrimaryFixedVariant: CSSProperties["color"];
  // secondary
  secondary: CSSProperties["color"];
  onSecondary: CSSProperties["color"];
  secondaryContainer: CSSProperties["color"];
  onSecondaryContainer: CSSProperties["color"];
  secondaryFixed: CSSProperties["color"];
  onSecondaryFixed: CSSProperties["color"];
  secondaryFixedDim: CSSProperties["color"];
  onSecondaryFixedVariant: CSSProperties["color"];
  // tertiary
  tertiary: CSSProperties["color"];
  onTertiary: CSSProperties["color"];
  tertiaryContainer: CSSProperties["color"];
  onTertiaryContainer: CSSProperties["color"];
  tertiaryFixed: CSSProperties["color"];
  onTertiaryFixed: CSSProperties["color"];
  tertiaryFixedDim: CSSProperties["color"];
  onTertiaryFixedVariant: CSSProperties["color"];
  // error
  error: CSSProperties["color"];
  onError: CSSProperties["color"];
  errorContainer: CSSProperties["color"];
  onErrorContainer: CSSProperties["color"];
  // surface
  surfaceDim: CSSProperties["color"];
  surface: CSSProperties["color"];
  surfaceBright: CSSProperties["color"];
  surfaceContainerLowest: CSSProperties["color"];
  surfaceContainerLow: CSSProperties["color"];
  surfaceContainer: CSSProperties["color"];
  surfaceContainerHigh: CSSProperties["color"];
  surfaceContainerHighest: CSSProperties["color"];
  onSurface: CSSProperties["color"];
  onSurfaceVariant;
  // outline
  outline: CSSProperties["color"];
  outlineVariant: CSSProperties["color"];
  // inverse
  inverseSurface: CSSProperties["color"];
  inverseOnSurface: CSSProperties["color"];
  inversePrimary: CSSProperties["color"];
  // scrim
  scrim: CSSProperties["color"];
  // shadow
  shadow: CSSProperties["color"];
}

export interface ColorPallete {
  [key: number]: CSSProperties["color"];
  0: CSSProperties["color"];
  10: CSSProperties["color"];
  20: CSSProperties["color"];
  30: CSSProperties["color"];
  40: CSSProperties["color"];
  50: CSSProperties["color"];
  60: CSSProperties["color"];
  70: CSSProperties["color"];
  80: CSSProperties["color"];
  90: CSSProperties["color"];
  100: CSSProperties["color"];
}

export interface TonalPallete {
  primary: ColorPallete;
  secondary: ColorPallete;
  tertiary: ColorPallete;
  error: ColorPallete;
  neutral: ColorPallete;
  neutralVariant: ColorPallete;
}

export const defaultPallete: TonalPallete = {
  primary: {
    0: "#000000",
    10: "#21005D",
    20: "#381E72",
    30: "#4F378B",
    40: "#6750A4",
    50: "#7F67BE",
    60: "#9A82DB",
    70: "#B69DF8",
    80: "#D0BCFF",
    90: "#EADDFF",
    95: "#F6EDFF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  secondary: {
    0: "#000000",
    10: "#1D192B",
    20: "#332D41",
    30: "#4A4458",
    40: "#625B71",
    50: "#7A7289",
    60: "#958DA5",
    70: "#B0A7C0",
    80: "#CCC2DC",
    90: "#E8DEF8",
    95: "#F6EDFF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  tertiary: {
    0: "#000000",
    10: "#31111D",
    20: "#492532",
    30: "#633B48",
    40: "#7D5260",
    50: "#986977",
    60: "#B58392",
    70: "#D29DAC",
    80: "#EFB8C8",
    90: "#FFD8E4",
    95: "#FFECF1",
    99: "#FFFBFA",
    100: "#FFFFFF",
  },
  error: {
    0: "#000000",
    10: "#410E0B",
    20: "#601410",
    30: "#8C1D18",
    40: "#B3261E",
    50: "#DC362E",
    60: "#E46962",
    70: "#EC928E",
    80: "#F2B8B5",
    90: "#F9DEDC",
    95: "#FCEEEE",
    99: "#FFFBF9",
    100: "#FFFFFF",
  },
  neutral: {
    0: "#000000",
    4: "#0F0D13",
    6: "#141218",
    10: "#1D1B20",
    12: "#211F26",
    17: "#2B2930",
    20: "#322F35",
    22: "#36343B",
    24: "#3B383E",
    30: "#48464C",
    40: "#605D64",
    50: "#79767D",
    60: "#938F96",
    70: "#AEA9B1",
    80: "#CAC5CD",
    87: "#1D1B20",
    90: "#E6E0E9",
    92: "#ECE6F0",
    94: "#F3EDF7",
    95: "#F5EFF7",
    96: "#F7F2FA",
    98: "#FEF7FF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  neutralVariant: {
    0: "#000000",
    10: "#1D1A22",
    20: "#322F37",
    30: "#49454F",
    40: "#605D66",
    50: "#79747E",
    60: "#938F99",
    70: "#AEA9B4",
    80: "#CAC4D0",
    90: "#E7E0EC",
    95: "#F5EEFA",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
} as const;

export enum COLOR_MODE {
  LIGHT = "light",
  DARK = "dark",
}

export type ColorModeConfig = {
  mode?: COLOR_MODE;
};

/**
 * [theme, darkTheme] and [primary, secondary, tertiary, error, neutral, neutralVariant] are mutually exclusive
 *
 */
export type ColorConfig =
  | {
      theme?: ColorTheme;
      darkTheme?: ColorTheme;
      primary?: never;
      secondary?: never;
      tertiary?: never;
      error?: never;
      neutral?: never;
      neutralVariant?: never;
    }
  | {
      theme?: never;
      darkTheme?: never;
      primary?: string;
      secondary?: string;
      tertiary?: string;
      error?: string;
      neutral?: string;
      neutralVariant?: string;
    };
