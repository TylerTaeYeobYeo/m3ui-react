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
  const style: TypographyConfig = useMemo(
    () => ({
      ...DEFAULT_TYPOGRAPHY,
      ...(typography ?? {}),
    }),
    [typography]
  );
  const globalStyle: ReactElement = useMemo(() => {
    return (
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
    );
  }, [rootClassName, style, typography]);
  return (
    <>
      {globalStyle}
      <TypographyContext.Provider value={style}>
        {children}
      </TypographyContext.Provider>
    </>
  );
};
