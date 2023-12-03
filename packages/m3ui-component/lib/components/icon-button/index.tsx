import styled from "@emotion/styled";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { SHAPE, VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { ClassNamePrefixProps } from "../../core/theme-provider/theme.context";

export type IconButtonProps = {
  shape?: Omit<SHAPE, SHAPE.ELEVATED>;
  variant?: VARIANT;
  selected?: boolean;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type InnerIconButtonProps = IconButtonProps & ClassNamePrefixProps;

const TextIconButton = styled.button`
  --buttonSurface: var(--surface);
  --buttonOnSurface: ${({ shape }: InnerIconButtonProps) => {
    switch (shape) {
      case SHAPE.TEXT:
      case SHAPE.OUTLINED:
        return "var(--onSurfaceVariant)";
      case SHAPE.FILLED:
      default:
        return "var(--onSurface)";
    }
  }};
  --buttonPrimary: ${({ shape, selected }) => {
    if (selected) {
      switch (shape) {
        case SHAPE.TEXT:
          return "var(--primary)";
        default:
      }
    }
    switch (shape) {
      case SHAPE.TEXT:
      case SHAPE.OUTLINED:
        return "var(--onSurfaceVariant)";
      case SHAPE.FILLED:
      default:
        return "var(--primary)";
    }
  }};
  --buttonOnPrimary: ${({ variant }: InnerIconButtonProps) => {
    switch (variant) {
      case VARIANT.PRIMARY:
        return "var(--onPrimary)";
      case VARIANT.SECONDARY:
        return "var(--onSecondary)";
      case VARIANT.TERTIARY:
        return "var(--onTertiary)";
      case VARIANT.SURFACE:
        return "var(--buttonOnSurface)";
      case VARIANT.ERROR:
        return "var(--onError)";
      default:
        return "var(--onPrimary)";
    }
  }};
  --buttonSecondaryContainer: var(--secondaryContainer);
  --buttonOnSecondaryContainer: var(--onSecondaryContainer);
  display: inline-block;

  border: none;
  border-radius: 100px;

  color: var(--buttonPrimary);
  background-color: var(--buttonSurface);

  padding: 8px;
  margin: 4px;

  width: 40px;
  height: 40px;
  overflow: hidden;

  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  ${({ classNamePrefix }: InnerIconButtonProps) =>
    classNamePrefix ? `.${classNamePrefix}-icon` : ".icon"} {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  &:focus-visible {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurface)
    );
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:disabled {
    background-color: var(--buttonSurface);
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
    .material-icons {
      color: color-mix(
        in srgb,
        var(--buttonOnSurface) 38%,
        var(--buttonSurface)
      );
    }
    cursor: not-allowed;
  }
`;
const FilledIconButton = styled(TextIconButton)`
  background-color: var(--buttonPrimary);
  color: var(--buttonOnPrimary);

  transition-property: color, background-color;

  &:focus-visible {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 8%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: color-mix(
      in srgb,
      var(--buttonOnSurface) 12%,
      var(--buttonSurface)
    );
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
  }
`;
const OutlinedIconButton = styled(TextIconButton)`
  outline: 1px solid var(--outline);

  transition-property: outline, color, background-color;
  &:focus-visible {
    outline: 1px solid var(--outline);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:hover {
    outline: 1px solid var(--outline);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurface)
    );
  }
  &:active {
    outline: 1px solid var(--outline);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurface)
    );
  }
  &:disabled {
    outline: 1px solid
      color-mix(in srgb, var(--buttonOnSurface) 12%, var(--buttonSurface));
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
    background-color: var(--buttonSurface);
    cursor: not-allowed;
  }
`;
const TonalIconButton = styled(TextIconButton)`
  color: var(--buttonOnSecondaryContainer);
  background: var(--buttonSecondaryContainer);

  box-shadow: var(--elevation-0);

  transition-property: box-shadow, color, background-color;

  &:focus-visible {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--buttonOnSecondaryContainer) 12%,
      var(--buttonSecondaryContainer)
    );
    box-shadow: var(--elevation-0);
  }
  &:hover {
    box-shadow: var(--elevation-1);
    background-color: color-mix(
      in srgb,
      var(--buttonOnSecondaryContainer) 8%,
      var(--buttonSecondaryContainer)
    );
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonOnSecondaryContainer) 12%,
      var(--buttonSecondaryContainer)
    );
    box-shadow: var(--elevation-0);
  }
  &:disabled {
    background-color: color-mix(
      in srgb,
      var(--buttonOnSurface) 12%,
      var(--buttonSurface)
    );
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
    box-shadow: var(--elevation-0);
  }
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ shape = SHAPE.FILLED, children, ...props }, ref) => {
    const { classNamePrefix } = useTheme();
    const commonProps = {
      ref,
      shape,
      classNamePrefix,
      ...props,
    };
    switch (shape) {
      case SHAPE.FILLED:
        return <FilledIconButton {...commonProps}>{children}</FilledIconButton>;
      case SHAPE.OUTLINED:
        return (
          <OutlinedIconButton {...commonProps}>{children}</OutlinedIconButton>
        );
      case SHAPE.TEXT:
        return <TextIconButton {...commonProps}>{children}</TextIconButton>;
      case SHAPE.TONAL:
        return <TonalIconButton {...commonProps}>{children}</TonalIconButton>;
    }
  }
);
