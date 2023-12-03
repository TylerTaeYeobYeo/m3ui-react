import { useContext } from "react";
import { ThemeContext } from "../theme.context";

export const useTheme = () => {
  const { classNamePrefix, ...other } = useContext(ThemeContext);
  return {
    ...other,
    classNamePrefix: classNamePrefix ? `${classNamePrefix.trim()}-` : "",
  };
};
