import styled from "@emotion/styled";
import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";

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
  left:
    props.variant === BADGE_VARIANT.DOT
      ? "calc(100% - 3px)"
      : "calc(100% - 8px)",
  top: props.variant === BADGE_VARIANT.DOT ? "-3px" : "-8px",
  zIndex: 10,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  padding: props.variant === BADGE_VARIANT.DOT ? "3px" : "0px 4px",
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
    wrapperProps?: Omit<HTMLAttributes<HTMLDivElement>, "children">;
  } & Omit<HTMLAttributes<HTMLDivElement>, "children">
>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = BADGE_VARIANT.DOT,
      data,
      className = "label-small",
      wrapperProps,
      children,
      ...props
    },
    ref
  ) => {
    const ceiling = (value) => {
      if (value > 999) return "999+";
      return value;
    };

    return (
      <BadgeWrapper {...wrapperProps}>
        <BadgeElement
          ref={ref}
          className={className}
          variant={variant}
          {...props}
        >
          {variant === BADGE_VARIANT.NUMBER ? ceiling(data) : null}
        </BadgeElement>
        {children}
      </BadgeWrapper>
    );
  }
);
