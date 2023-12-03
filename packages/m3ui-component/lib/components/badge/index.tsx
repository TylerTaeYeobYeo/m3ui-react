import styled from "@emotion/styled";
import {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";

export enum BADGE_VARIANT {
  DOT = "dot",
  NUMBER = "number",
}

const BadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const BadgeElement = styled.div((props: BadgeProps) => ({
  position: "absolute",
  right: props.variant === BADGE_VARIANT.DOT ? "-3px" : "-8px",
  top: props.variant === BADGE_VARIANT.DOT ? "-3px" : "-8px",
  zIndex: 10,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  minHeight: "6px",
  maxHeight: props.variant === BADGE_VARIANT.DOT ? "6px" : "34px",
  minWidth: props.variant === BADGE_VARIANT.DOT ? "6px" : "16px",
  maxWidth: props.variant === BADGE_VARIANT.DOT ? "6px" : "34px",
  backgroundColor: "var(--error)",
  color: "var(--onError)",
  pointerEvents: "none",
  touchAction: "auto",
  ...(props.style ?? {}),
}));

export type BadgeProps = PropsWithChildren<
  {
    variant?: BADGE_VARIANT;
    data?: number;
    children?: ReactNode;
  } & HTMLAttributes<HTMLDivElement>
>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = BADGE_VARIANT.DOT,
      data,
      children,
      className = "label-small",
      ...props
    },
    ref
  ) => {
    return (
      <BadgeWrapper>
        <BadgeElement
          ref={ref}
          className={className}
          variant={variant}
          {...props}
        >
          {variant === BADGE_VARIANT.NUMBER ? data : null}
        </BadgeElement>
        {children}
      </BadgeWrapper>
    );
  }
);
