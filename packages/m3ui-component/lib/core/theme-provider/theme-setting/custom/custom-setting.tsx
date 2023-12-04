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
  classNamePrefix = "",
}) => {
  const globalStyle: ReactElement = useMemo(() => {
    return (
      <Global
        styles={css`
          ${rootClassName ? `.${rootClassName}` : ":root"} {
            .${classNamePrefix}ripple {
              position: absolute;
              border-radius: 50%;
              background: radial-gradient(
                circle,
                color-mix(in srgb, transparent 50%, var(--secondary)),
                color-mix(in srgb, transparent 56%, var(--secondary)) 75%,
                color-mix(in srgb, transparent 66%, var(--secondary)) 50%,
                color-mix(in srgb, transparent 82%, var(--secondary)) 25%
              );
              transition: all 1s ease-in-out;
              transform: scale(0);
              transform-origin: center;
              opacity: 1;
            }
            .${classNamePrefix}ripple.${classNamePrefix}ripple-scale {
              opacity: 0.5;
              transform: scale(4);
              transition: all 0.55s ease-out;
            }
            .${classNamePrefix}ripple.${classNamePrefix}ripple-scale.${classNamePrefix}ripple-fade-out {
              opacity: 0;
              transform: scale(10);
              transition: all 0.3s ease-in-out;
            }

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
