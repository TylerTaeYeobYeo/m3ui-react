import { SerializedStyles } from "@emotion/react";
import { CSSProperties } from "react";

export type CustomStyle = {
  /**
   * custom classes wil always start with {classNamePrefix} from theme context
   */
  classes?: {
    [className: string]: CSSProperties;
  };
  /**
   * Be ware that custom styles
   * will not be scoped with {classNamePrefix} from theme context
   */
  customStyles?: SerializedStyles;
};
