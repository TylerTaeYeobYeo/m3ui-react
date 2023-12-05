import { Global, css } from "@emotion/react";
import { FC, PropsWithChildren, ReactElement, useMemo } from "react";
import { camelCaseToKebabCase } from "../../../../utils/string.util";
import { RootClassNameProps } from "../../theme.context";
import { DEFAULT_TYPOGRAPHY, TypographyConfig } from "./typography.constant";
import { TypographyContext } from "./typograpy.context";

export type TypographySettingProps = PropsWithChildren<
  RootClassNameProps & {
    typography?: TypographyConfig;
  }
>;

export const TypographySetting: FC<TypographySettingProps> = ({
  rootClassName,
  typography,
  classNamePrefix = "",
  children,
}) => {
  const globalStyle: ReactElement = useMemo(() => {
    const style: TypographyConfig = {
      ...DEFAULT_TYPOGRAPHY,
      ...(typography ?? {}),
    };
    return (
      <>
        <Global
          styles={css`
            ${rootClassName ? `.${rootClassName}` : ":root"} {
              ${Object.entries(style).map(
                ([className, style]) =>
                  `.${classNamePrefix}${className} { ${Object.entries(style)
                    .map(
                      ([key, value]) => `${camelCaseToKebabCase(key)}:${value}`
                    )
                    .join(";\n")} }`
              )}
            }
          `}
        />
        <TypographyContext.Provider value={style}>
          {children}
        </TypographyContext.Provider>
      </>
    );
  }, [rootClassName, typography]);
  return globalStyle;
};
