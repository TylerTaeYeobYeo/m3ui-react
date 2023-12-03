import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { Elevation, defaultElevation } from ".";
import { COLOR_MODE, ColorModeConfig } from "..";
import { RootClassNameProps } from "../theme-provider/theme.context";

export type ElevationSettingProps = RootClassNameProps &
  ColorModeConfig & {
    elevation?: Elevation;
  };
export const ElevationSetting: FC<ElevationSettingProps> = ({
  rootClassName,
  mode = COLOR_MODE.LIGHT,
  elevation,
}) => {
  const globalStyle: ReactElement = useMemo(() => {
    return (
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            ${Object.entries(elevation ? elevation : defaultElevation[mode])
              .map(([key, value]) => `--elevation-${key}: ${value}`)
              .join(";\n")}
          }
        `}
      />
    );
  }, [rootClassName, elevation]);
  return globalStyle;
};
