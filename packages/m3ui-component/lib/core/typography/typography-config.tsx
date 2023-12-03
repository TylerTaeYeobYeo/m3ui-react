import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import {
  DEFAULT_TYPOGRAPHY,
  TypographyConfig,
} from "../../core/typography/typography.constant";
import { camelCaseToKebabCase } from "../../utils/string.util";
import { RootClassNameProps } from "../theme-provider/theme.context";

export type TypographySettingProps = RootClassNameProps & {
  typography?: TypographyConfig;
};

export const TypographySetting: FC<TypographySettingProps> = ({
  rootClassName,
  typography,
}) => {
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
                `.${className} { ${Object.entries(style)
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
