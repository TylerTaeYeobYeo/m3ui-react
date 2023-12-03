import { CSSProperties } from "react";

export type Elevation = {
  0: CSSProperties["boxShadow"]; // surface
  1: CSSProperties["boxShadow"]; // surface-container-low
  2: CSSProperties["boxShadow"]; // surface-container
  3: CSSProperties["boxShadow"]; // surface-container-high
  4: CSSProperties["boxShadow"]; // surface-container-high
  5: CSSProperties["boxShadow"]; // surface-container-highest
};
