import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ReactElement, forwardRef } from "react";
import { SHAPE, VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { TYPOGRAPHY } from "../../core/theme-provider/theme-setting/typography/typography.constant";
import { ClassNamePrefixProps } from "../../core/theme-provider/theme.context";
import { IconProps } from "../icon";

export type ButtonProps = {
  shape?: SHAPE;
  variant?: VARIANT;
  icon?: ReactElement<IconProps>;
  children: React.ReactNode | React.ReactNode[];
  /** default: TYPOGRAPHY.LABEL_LARGE */
  typography?: TYPOGRAPHY;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type InternalButtonProps = ButtonProps & ClassNamePrefixProps;

const TextButton = styled.button`
  --buttonSurface: var(--surface);
  --buttonOnSurface: var(--onSurface);
  --buttonPrimary: ${({ variant }: InternalButtonProps) => {
    switch (variant) {
      case VARIANT.PRIMARY:
        return "var(--primary)";
      case VARIANT.SECONDARY:
        return "var(--secondary)";
      case VARIANT.TERTIARY:
        return "var(--tertiary)";
      case VARIANT.SURFACE:
        return "var(--surface)";
      case VARIANT.ERROR:
        return "var(--error)";
      default:
        return "var(--primary)";
    }
  }};
  --buttonOnPrimary: ${({ variant }: InternalButtonProps) => {
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 100px;

  color: var(--buttonPrimary);
  background-color: var(--buttonSurface);

  padding: ${({ shape, icon }: InternalButtonProps) =>
    icon
      ? shape === SHAPE.TEXT
        ? "12px 16px 12px 10px"
        : "10px 24px 10px 16px"
      : shape === SHAPE.TEXT
      ? "10px 12px"
      : "10px 24px"};

  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  ${({ classNamePrefix }) =>
    classNamePrefix ? `.${classNamePrefix}-icon` : ".icon"} {
    width: 18px;
    height: 18px;
    font-size: 18px;
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
    cursor: not-allowed;
  }
`;
const FilledButton = styled(TextButton)`
  background-color: var(--buttonPrimary);
  color: var(--buttonOnPrimary);

  box-shadow: var(--elevation-0);

  transition-property: box-shadow, color, background-color;

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
    box-shadow: var(--elevation-1);
  }
  &:active {
    background-color: color-mix(
      in srgb,
      var(--buttonSurface) 12%,
      var(--buttonPrimary)
    );
    color: var(--buttonOnPrimary);
    box-shadow: var(--elevation-0);
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    cursor: not-allowed;
    background-color: color-mix(
      in srgb,
      var(--buttonOnSurface) 12%,
      var(--buttonSurface)
    );
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
  }
`;
const OutlinedButton = styled(TextButton)`
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
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurface)
    );
  }
  &:active {
    outline: 1px solid var(--buttonPrimary);
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
const ElevatedButton = styled(TextButton)`
  --buttonSurfaceContainerLow: var(--surfaceContainerLow);
  box-shadow: var(--elevation-1);

  background-color: var(--buttonSurfaceContainerLow);

  transition-property: box-shadow, color, background-color;
  &:focus-visible {
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurfaceContainerLow)
    );
  }
  &:hover {
    box-shadow: var(--elevation-2);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 8%,
      var(--buttonSurfaceContainerLow)
    );
  }
  &:active {
    box-shadow: var(--elevation-1);
    background-color: color-mix(
      in srgb,
      var(--buttonPrimary) 12%,
      var(--buttonSurfaceContainerLow)
    );
  }
  &:disabled {
    box-shadow: var(--elevation-0);
    background-color: color-mix(
      in srgb,
      var(--buttonOnSurface) 12%,
      var(--buttonSurface)
    );
    color: color-mix(in srgb, var(--buttonOnSurface) 38%, var(--buttonSurface));
    cursor: not-allowed;
  }
`;
const TonalButton = styled(TextButton)`
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      shape = SHAPE.FILLED,
      icon,
      children,
      typography = TYPOGRAPHY.LABEL_LARGE,
      className,
      ...props
    },
    ref
  ) => {
    const { classNamePrefix } = useTheme();
    const commonProps = {
      ref,
      shape,
      icon,
      classNamePrefix,
      className: `${`${
        classNamePrefix ? `${classNamePrefix}-` : ""
      }${typography}`} ${className ?? ""}`,
      ...props,
    };
    const body = (
      <>
        {icon}
        {children}
      </>
    );
    switch (shape) {
      case SHAPE.FILLED:
        return <FilledButton {...commonProps}>{body}</FilledButton>;
      case SHAPE.OUTLINED:
        return <OutlinedButton {...commonProps}>{body}</OutlinedButton>;
      case SHAPE.TEXT:
        return <TextButton {...commonProps}>{body}</TextButton>;
      case SHAPE.ELEVATED:
        return <ElevatedButton {...commonProps}>{body}</ElevatedButton>;
      case SHAPE.TONAL:
        return <TonalButton {...commonProps}>{body}</TonalButton>;
    }
  }
);
