import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { Breakpoint } from ".";
import { RootClassNameProps } from "../../theme.context";

export type BreakpointSettingProps = RootClassNameProps & {
  breakpoint?: Breakpoint;
};
export const BreakpointSetting: FC<BreakpointSettingProps> = ({
  rootClassName,
  breakpoint = {
    xs: 0,
    sm: 600,
    md: 905,
    lg: 1240,
    xl: 1440,
  },
}) => {
  const globalStyle: ReactElement = useMemo(() => {
    return (
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            ${Object.entries(breakpoint)
              .map(([key, value]) => `--breakpoint-${key}: ${value}px`)
              .join(";\n")}
          }
        `}
      />
    );
  }, [rootClassName, breakpoint]);
  return globalStyle;
};
