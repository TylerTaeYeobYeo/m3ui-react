import styled from "@emotion/styled";
import { ButtonHTMLAttributes, CSSProperties, forwardRef, useRef } from "react";
import { VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../core/theme-provider/theme-setting/color/color.constant";
import { ShapeScale } from "../../core/theme-provider/theme-setting/shape";
import { useRipple } from "../../hooks/use-ripple";
import { camelCaseToKebabCase } from "../../utils/string.util";
import { getColorVariable, mixColor } from "../../utils/style.util";
import { Icon, IconProps } from "../icon";

export type ExtendedFABProps = {
  iconProps: IconProps;
  variant?: VARIANT;
  rippleEffect?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BaseExtendedFAB = styled.button<
  Omit<ExtendedFABProps, "iconProps"> & {
    hasChildren: boolean;
    classNamePrefix: string;
    typography?: CSSProperties;
    shapeScale?: ShapeScale;
  }
>`
  --fabSurface: ${({ variant }) =>
    getColorVariable({
      variant,
      type:
        variant === VARIANT.SURFACE
          ? COLOR_DIVIERSION_TYPE.CONTAINER_HIGH
          : COLOR_DIVIERSION_TYPE.CONTAINER,
    })};
  --onFabSurface: ${({ variant }) => getColorVariable({ variant })};
  --fabPrimary: ${({ variant }) =>
    getColorVariable({
      variant: variant === VARIANT.SURFACE ? VARIANT.PRIMARY : variant,
      type:
        variant === VARIANT.SURFACE
          ? undefined
          : COLOR_DIVIERSION_TYPE.ON_CONTAINER,
    })};
  --onFabPrimary: ${({ variant }) =>
    getColorVariable({ variant, type: COLOR_DIVIERSION_TYPE.ON })};
  color: var(--fabPrimary);
  background-color: var(--fabSurface);

  padding: 16px 20px;
  .${({ classNamePrefix }) => classNamePrefix}icon {
    color: var(--fabPrimary);
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
  ${({ typography }) =>
    typography
      ? Object.entries(typography)
          .map(([key, value]) => `${camelCaseToKebabCase(key)}: ${value};`)
          .join("\n")
      : ""}

  border: none;
  outline: none;
  border-radius: ${({ shapeScale }) => shapeScale?.large ?? 16}px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  overflow: hidden;

  box-shadow: var(--elevation-3);
  cursor: pointer;

  transition-property: color, background-color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:focus-visible {
    box-shadow: var(--elevation-3);
    background-color: ${mixColor(
      "var(--onFabSurface)",
      "var(--fabSurface)",
      12
    )};
  }
  &:hover {
    box-shadow: var(--elevation-4);
    background-color: ${mixColor(
      "var(--onFabSurface)",
      "var(--fabSurface)",
      8
    )};
  }
  &:active {
    box-shadow: var(--elevation-3);
    background-color: ${mixColor(
      "var(--onFabSurface)",
      "var(--fabSurface)",
      12
    )};
  }
  &:disabled {
    box-shadow: var(--elevation-3);
    cursor: not-allowed;
  }
`;

export const ExtendedFAB = forwardRef<HTMLButtonElement, ExtendedFABProps>(
  (
    {
      iconProps,
      children,
      variant = VARIANT.PRIMARY,
      rippleEffect = true,
      ...props
    },
    ref
  ) => {
    const { classNamePrefix, typography, shapeScale } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>();
    useRipple(buttonRef, rippleEffect);
    return (
      <BaseExtendedFAB
        ref={(el: HTMLButtonElement) => {
          buttonRef.current = el;
          if (ref) {
            if (typeof ref === "function") {
              ref(el);
            } else {
              ref.current = el;
            }
          }
        }}
        variant={variant}
        hasChildren={!!children}
        classNamePrefix={classNamePrefix}
        typography={typography["label-large"]}
        shapeScale={shapeScale}
        {...props}
      >
        <Icon variant={variant} {...iconProps} />
        {children}
      </BaseExtendedFAB>
    );
  }
);
