import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { CustomStyle } from ".";
import { camelCaseToKebabCase } from "../../../../utils/string.util";
import { RootClassNameProps } from "../../theme.context";

export type CustomSettingProps = RootClassNameProps & CustomStyle;
export const CustomSetting: FC<CustomSettingProps> = ({
  rootClassName,
  customStyles,
  classes = {},
  classNamePrefix,
}) => {
  const globalStyle: ReactElement = useMemo(() => {
    return (
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            ${Object.entries(classes)
              ?.map(
                ([className, value]) => `.${classNamePrefix}${className} {
                  ${Object.entries(value)
                    ?.map(
                      ([key, value]) => `${camelCaseToKebabCase(key)}: ${value}`
                    )
                    .join(";\n")}
                }`
              )
              .join("\n")}
            ${customStyles}
          }
        `}
      />
    );
  }, [rootClassName, classes, customStyles, classNamePrefix]);
  return globalStyle;
};
