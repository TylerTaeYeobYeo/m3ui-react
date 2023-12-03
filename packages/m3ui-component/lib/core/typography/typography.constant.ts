import { CSSProperties } from "react";

export enum TYPOGRAPHY {
  DISPLAY_LARGE = "display-large",
  DISPLAY_MEDIUM = "display-medium",
  DISPLAY_SMALL = "display-small",
  HEADLINE_LARGE = "headline-large",
  HEADLINE_MEDIUM = "headline-medium",
  HEADLINE_SMALL = "headline-small",
  TITLE_LARGE = "title-large",
  TITLE_MEDIUM = "title-medium",
  TITLE_SMALL = "title-small",
  LABEL_LARGE = "label-large",
  LABEL_MEDIUM = "label-medium",
  LABEL_SMALL = "label-small",
  BODY_LARGE = "body-large",
  BODY_MEDIUM = "body-medium",
  BODY_SMALL = "body-small",
}

export type TypographyConfig = { [key in TYPOGRAPHY]?: CSSProperties };

/**
 * @from https://www.figma.com/file/rdoxrbgjAenEisfbdUvfnj/Material-3-Design-Kit-(Community)?node-id=49848%3A6313&mode=dev
 */
export const DEFAULT_TYPOGRAPHY: TypographyConfig = {
  [TYPOGRAPHY.DISPLAY_LARGE]: {
    fontSize: "57px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "64px",
    letterSpacing: "-0.25px",
  },
  [TYPOGRAPHY.DISPLAY_MEDIUM]: {
    fontSize: "45px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "52px",
  },
  [TYPOGRAPHY.DISPLAY_SMALL]: {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "44px",
  },
  [TYPOGRAPHY.HEADLINE_LARGE]: {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  },
  [TYPOGRAPHY.HEADLINE_MEDIUM]: {
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "36px",
  },
  [TYPOGRAPHY.HEADLINE_SMALL]: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "32px",
  },
  [TYPOGRAPHY.TITLE_LARGE]: {
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
  },
  [TYPOGRAPHY.TITLE_MEDIUM]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.15px",
  },
  [TYPOGRAPHY.TITLE_SMALL]: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  [TYPOGRAPHY.LABEL_LARGE]: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  [TYPOGRAPHY.LABEL_MEDIUM]: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0.5px",
  },
  [TYPOGRAPHY.LABEL_SMALL]: {
    fontSize: "11px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0.5px",
  },
  [TYPOGRAPHY.BODY_LARGE]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
  [TYPOGRAPHY.BODY_MEDIUM]: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
  [TYPOGRAPHY.BODY_SMALL]: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
  },
} as const;
