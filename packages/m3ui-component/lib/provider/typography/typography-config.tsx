import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import {
  DEFAULT_TYPOGRAPHY,
  TypographyConfig,
} from "../../provider/typography/typography.constant";
import { camelCaseToKebabCase } from "../../utils/string.util";

export type TypographySettingProps = TypographyConfig;

export const TypographySetting: FC<TypographySettingProps> = ({ ...props }) => {
  const globalStyle: ReactElement = useMemo(() => {
    const style: TypographyConfig = {
      ...DEFAULT_TYPOGRAPHY,
      ...props,
    };
    return (
      <Global
        styles={css`
          ${Object.entries(style).map(
            ([className, style]) =>
              `.${className} { ${Object.entries(style)
                .map(([key, value]) => `${camelCaseToKebabCase(key)}:${value}`)
                .join(";\n")} }`
          )}
        `}
      />
    );
  }, [props]);
  return globalStyle;
};
