import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { SIZE, VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../core/theme-provider/theme-setting/color/color.constant";
import { ShapeScale } from "../../core/theme-provider/theme-setting/shape";
import { useRipple } from "../../hooks/use-ripple";
import { getColorVariable, mixColor } from "../../utils/style.util";
import { Icon, IconProps } from "../icon";

export type FloatingActionButtonProps = {
  iconProps: IconProps;
  variant?: VARIANT;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  rippleEffect?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const BaseFloatingActionButton = styled.button<
  Omit<FloatingActionButtonProps, "iconProps"> & {
    classNamePrefix: string;
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

  padding: ${({ size }) => {
    switch (size) {
      case SIZE.SMALL:
        return "8px";
      case SIZE.LARGE:
        return "30px";
      default:
      case SIZE.MEDIUM:
        return "16px";
    }
  }};
  .${({ classNamePrefix }) => classNamePrefix}icon {
    ${({ size }) => {
      const iconSize = size === SIZE.LARGE ? 36 : 24;
      return css`
        color: var(--fabPrimary);
        width: ${iconSize}px;
        height: ${iconSize}px;
        font-size: ${iconSize}px;
      `;
    }}
  }

  border: none;
  outline: none;
  border-radius: ${({ size, shapeScale }) => {
    switch (size) {
      case SIZE.SMALL:
        return shapeScale?.medium ?? 12;
      case SIZE.MEDIUM:
        return shapeScale?.large ?? 16;
      case SIZE.LARGE:
        return shapeScale?.["extra-large"] ?? 28;
    }
  }}px;

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

export const FloatingActionButton = forwardRef<
  HTMLButtonElement,
  FloatingActionButtonProps
>(
  (
    {
      iconProps,
      variant = VARIANT.PRIMARY,
      size = SIZE.MEDIUM,
      rippleEffect = true,
      ...props
    },
    ref
  ) => {
    const { classNamePrefix, shapeScale } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>();
    useRipple(buttonRef, rippleEffect);
    return (
      <BaseFloatingActionButton
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
        classNamePrefix={classNamePrefix}
        shapeScale={shapeScale}
        size={size}
        {...props}
      >
        <Icon variant={variant} {...iconProps} />
      </BaseFloatingActionButton>
    );
  }
);
