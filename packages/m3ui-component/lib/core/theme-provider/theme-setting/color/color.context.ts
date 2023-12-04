import { createContext } from "react";
import { createTheme } from "../../../../utils/theme.util";
import {
  COLOR_MODE,
  ColorTheme,
  TonalPalette,
  defaultPalette,
} from "./color.constant";

export type ColorContextType = {
  mode: COLOR_MODE;
  palette: TonalPalette;
  color: ColorTheme;
};

export const ColorContext = createContext<ColorContextType>({
  mode: COLOR_MODE.LIGHT,
  palette: defaultPalette,
  color: createTheme(defaultPalette),
});
