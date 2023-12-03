import { CSSProperties } from "react";
import { COLOR_MODE } from "../../..";

export type Elevation = {
  0: CSSProperties["boxShadow"]; // surface
  1: CSSProperties["boxShadow"]; // surface-container-low
  2: CSSProperties["boxShadow"]; // surface-container
  3: CSSProperties["boxShadow"]; // surface-container-high
  4: CSSProperties["boxShadow"]; // surface-container-high
  5: CSSProperties["boxShadow"]; // surface-container-highest
};

const light: Elevation = {
  0: "0px 0px 0px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px rgba(0, 0, 0, 0.30)",
  1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  3: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  4: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  5: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
};

const dark: Elevation = {
  0: "0px 0px 0px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px rgba(0, 0, 0, 0.30)",
  1: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  2: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
  3: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  4: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  5: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
};

export const defaultElevation: { [key in COLOR_MODE]: Elevation } = {
  [COLOR_MODE.LIGHT]: light,
  [COLOR_MODE.DARK]: dark,
};
