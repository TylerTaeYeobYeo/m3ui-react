import { useContext } from "react";
import { ThemeContext } from "../theme.context";

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
