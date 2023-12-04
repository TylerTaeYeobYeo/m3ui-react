export enum SHAPE_FAMILY {
  ROUNDED = "rounded",
  CUT = "cut",
}

export enum SHAPE_SCALE {
  NONE = "none",
  EXTRA_SMALL = "extra-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  EXTRA_LARGE = "extra-large",
  FULL = "full",
}

export type ShapeScale = {
  [key in SHAPE_SCALE]?: number;
};

export const defaultShapeScale: ShapeScale = {
  [SHAPE_SCALE.NONE]: 0,
  [SHAPE_SCALE.EXTRA_SMALL]: 4,
  [SHAPE_SCALE.SMALL]: 8,
  [SHAPE_SCALE.MEDIUM]: 12,
  [SHAPE_SCALE.LARGE]: 16,
  [SHAPE_SCALE.EXTRA_LARGE]: 28,
  [SHAPE_SCALE.FULL]: 9999,
};
