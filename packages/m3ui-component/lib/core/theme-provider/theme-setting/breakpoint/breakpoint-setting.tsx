import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { RootClassNameProps } from "../../theme.context";
import { Breakpoint, defaultBreakpoint } from "./breakpoint.constant";

export type BreakpointSettingProps = RootClassNameProps & {
  breakpoint?: Breakpoint;
};
export const BreakpointSetting: FC<BreakpointSettingProps> = ({
  rootClassName,
  breakpoint = defaultBreakpoint,
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
