import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { RootClassNameProps } from "../../theme.context";
import { ShapeScale, defaultShapeScale } from "./shape.constant";

export type ShapeSettingProps = RootClassNameProps & {
  shapeScale?: ShapeScale;
};
export const ShapeSetting: FC<ShapeSettingProps> = ({
  rootClassName,
  shapeScale,
  classNamePrefix = "",
}) => {
  const shapes = {
    ...defaultShapeScale,
    ...(shapeScale ?? {}),
  };
  const globalStyle: ReactElement = useMemo(() => {
    return (
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            ${Object.entries(shapes)
              .map(
                ([key, value]) => `--${classNamePrefix}shape-${key}: ${value}px`
              )
              .join(";\n")}
          }
        `}
      />
    );
  }, [rootClassName]);
  return globalStyle;
};
