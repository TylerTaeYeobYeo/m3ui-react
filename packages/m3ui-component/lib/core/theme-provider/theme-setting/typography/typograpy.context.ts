import { createContext } from "react";
import { DEFAULT_TYPOGRAPHY, TypographyConfig } from "./typography.constant";

export type TypographyContextType = TypographyConfig;

export const TypographyContext =
  createContext<TypographyContextType>(DEFAULT_TYPOGRAPHY);
