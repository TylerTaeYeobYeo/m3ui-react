import { Global, css } from "@emotion/react";
import { FC, PropsWithChildren, ReactElement, useMemo } from "react";
import { RootClassNameProps } from "../../theme.context";
import { ShapeScaleContext } from "./color.context";
import { ShapeScale, defaultShapeScale } from "./shape.constant";

export type ShapeSettingProps = PropsWithChildren<
  RootClassNameProps & {
    shapeScale?: ShapeScale;
  }
>;
export const ShapeSetting: FC<ShapeSettingProps> = ({
  rootClassName,
  shapeScale,
  classNamePrefix = "",
  children,
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
  return (
    <>
      {globalStyle}
      <ShapeScaleContext.Provider
        value={{
          shapeScale: shapes,
        }}
      >
        {children}
      </ShapeScaleContext.Provider>
    </>
  );
};
