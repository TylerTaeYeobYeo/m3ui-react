import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { camelCaseToKebabCase } from "../../../../utils/string.util";
import { useTheme } from "../../hook";
import { RootClassNameProps } from "../../theme.context";
import { DEFAULT_TYPOGRAPHY, TypographyConfig } from "./typography.constant";

export type TypographySettingProps = RootClassNameProps & {
  typography?: TypographyConfig;
};

export const TypographySetting: FC<TypographySettingProps> = ({
  rootClassName,
  typography,
}) => {
  const { classNamePrefix } = useTheme();
  const globalStyle: ReactElement = useMemo(() => {
    const style: TypographyConfig = {
      ...DEFAULT_TYPOGRAPHY,
      ...typography,
    };
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
  }, [rootClassName, typography]);
  return globalStyle;
};
