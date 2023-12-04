export enum VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  SURFACE = "surface",
  ERROR = "error",
}

export enum SHAPE {
  FILLED = "filled",
  OUTLINED = "outlined",
  TEXT = "text",
  ELEVATED = "elevated",
  TONAL = "tonal",
}

export enum SIZE {
  EXTRA_SMALL = "extra-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  EXTRA_LARGE = "extra-large",
}

export type ClickableContainerProps = {
  clickable?: boolean;
};
