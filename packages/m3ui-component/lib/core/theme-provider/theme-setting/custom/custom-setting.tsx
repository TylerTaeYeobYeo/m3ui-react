import { Global, css } from "@emotion/react";
import { FC, ReactElement, useMemo } from "react";
import { CustomStyle } from ".";
import { camelCaseToKebabCase } from "../../../../utils/string.util";
import { mixColor } from "../../../../utils/style.util";
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
                ${mixColor("var(--onSurface)", "transparent", 16)},
                ${mixColor("var(--onSurface)", "transparent", 12)} 75%,
                ${mixColor("var(--onSurface)", "transparent", 12)} 50%,
                ${mixColor("var(--onSurface)", "transparent", 8)} 25%
              );
              transition: transform 1s ease-in-out, opacity 1s ease-in-out;
              transform: scale(0);
              transform-origin: center;
              pointer-events: none;
              touch-action: none;
              opacity: 1;
            }
            .${classNamePrefix}ripple.${classNamePrefix}ripple-scale {
              opacity: 0.2;
              transform: scale(4);
              transition: transform 0.55s ease-out, opacity 0.55s ease-out;
            }
            .${classNamePrefix}ripple.${classNamePrefix}ripple-scale.${classNamePrefix}ripple-fade-out {
              opacity: 0;
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
