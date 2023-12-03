import { CSSProperties } from "react";

export type Elevation = {
  [level: number]: CSSProperties["boxShadow"];
};
