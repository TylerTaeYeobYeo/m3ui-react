import { HTMLAttributes, forwardRef, useRef } from "react";
import { SHAPE, VARIANT } from "../../constant";

import styled from "@emotion/styled";
import { useTheme } from "../../core/theme-provider/hook";
import { COLOR_DIVIERSION_TYPE } from "../../core/theme-provider/theme-setting/color/color.constant";
import { SHAPE_SCALE } from "../../core/theme-provider/theme-setting/shape";
import { useRipple } from "../../hooks/use-ripple";
import { getColorVariable } from "../../utils/style.util";

export enum CARD_SHAPE {
  OUTLINED = SHAPE.OUTLINED,
  ELEVATED = SHAPE.ELEVATED,
  FILLED = SHAPE.FILLED,
}

export type CardProps = {
  shape?: CARD_SHAPE;
  rippleEffect?: boolean;
} & HTMLAttributes<HTMLDivElement>;

type BaseCardProps = CardProps & { classNamePrefix: string };

const BaseCard = styled.div<BaseCardProps>`
  --cardSurface: ${({ shape }) => {
    let type: COLOR_DIVIERSION_TYPE | undefined;
    switch (shape) {
      case CARD_SHAPE.OUTLINED:
        break;
      case CARD_SHAPE.ELEVATED:
        type = COLOR_DIVIERSION_TYPE.CONTAINER_LOW;
        break;
      case CARD_SHAPE.FILLED:
        type = COLOR_DIVIERSION_TYPE.CONTAINER_HIGHEST;
        break;
    }
    return getColorVariable({ variant: VARIANT.SURFACE, type });
  }};
  --onCardSurface: var(--onSurface);
  border-radius: ${({ classNamePrefix }) =>
    `var(--${classNamePrefix}shape-${SHAPE_SCALE.MEDIUM})`};

  display: block;
  background-color: var(--cardSurface);
  color: var(--onSurfaceVariant);
  border: none;
  position: relative;
  position: relative;
  overflow: hidden;

  transition-property: box-shadow, background-color, color;
  transition-duration: 0.2s;

  &:focus-visible {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--onCardSurface) 12%,
      var(--cardSurface)
    );
  }
  &:hover:not(:has(button:hover)) {
    background-color: color-mix(
      in srgb,
      var(--onCardSurface) 8%,
      var(--cardSurface)
    );
  }
  &:active:not(:has(> button:active)) {
    background-color: color-mix(
      in srgb,
      var(--onCardSurface) 12%,
      var(--cardSurface)
    );
  }
  // when dragged
  // please put 'data-dragging' to true on drag start
  &:-webkit-user-drag,
  &:-moz-window-dragging,
  &:has([data-dragging="true"]) {
    box-shadow: var(--elevation-3);
    background-color: color-mix(
      in srgb,
      var(--onCardSurface) 16%,
      var(--cardSurface)
    );
  }
`;
const OutlinedCard = styled(BaseCard)`
  outline: 1px solid var(--outlineVariant);
  &:focus-visible {
    outline: 1px solid var(--outlineVariant);
  }
  &:hover:not(:has(> button:hover)) {
    box-shadow: var(--elevation-1);
  }
  &:active:not(:has(> button:active)) {
    box-shadow: var(--elevation-0);
  }
  &:-webkit-user-drag,
  &:-moz-window-dragging,
  &:has([data-dragging="true"]) {
  }
`;
const ElevatedCard = styled(BaseCard)`
  box-shadow: var(--elevation-1);
  &:focus-visible {
    box-shadow: var(--elevation-1);
  }
  &:hover {
    box-shadow: var(--elevation-2);
  }
  &:active {
    box-shadow: var(--elevation-1);
  }
  &:-webkit-user-drag,
  &:-moz-window-dragging,
  &:has([data-dragging="true"]) {
    box-shadow: var(--elevation-4);
  }
`;
const FilledCard = styled(BaseCard)`
  &:focus-visible {
  }
  &:hover {
    box-shadow: var(--elevation-1);
  }
  &:active {
    box-shadow: var(--elevation-1);
  }
  &:-webkit-user-drag,
  &:-moz-window-dragging,
  &:has([data-dragging="true"]) {
  }
`;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ shape = CARD_SHAPE.OUTLINED, rippleEffect, ...props }, ref) => {
    const divRef = useRef<HTMLDivElement>();
    const { classNamePrefix } = useTheme();
    const commonProps = {
      ref: (el: HTMLDivElement) => {
        divRef.current = el;
        if (typeof ref === "function") {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      },
      shape,
      classNamePrefix,
      ...props,
    };

    useRipple(divRef, rippleEffect);
    switch (shape) {
      case CARD_SHAPE.OUTLINED:
        return <OutlinedCard {...commonProps} />;
      case CARD_SHAPE.FILLED:
        return <FilledCard {...commonProps} />;
      case CARD_SHAPE.ELEVATED:
        return <ElevatedCard {...commonProps} />;
    }
  }
);
