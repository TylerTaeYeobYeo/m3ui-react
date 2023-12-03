import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { Elevation } from ".";
import { RootClassNameProps } from "../theme-provider/theme.context";

export type ElevationSettingProps = RootClassNameProps & {
  elevation?: Elevation;
};
export const ElevationSetting: FC<ElevationSettingProps> = ({
  rootClassName,
  elevation = {
    1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
    2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
    3: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
    4: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
    5: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
  },
}) => {
  const globalStyle: ReactElement = useMemo(() => {
    return (
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            ${Object.entries(elevation)
              .map(
                ([key, value]) => `.elevation-${key} { box-shadow: ${value}; }`
              )
              .join("\n")}
          }
        `}
      />
    );
  }, [rootClassName, elevation]);
  return globalStyle;
};
