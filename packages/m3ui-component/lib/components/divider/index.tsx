import styled from "@emotion/styled";
import { HTMLAttributes, forwardRef } from "react";

export type DividerProps = {
  vertical?: boolean;
} & Omit<HTMLAttributes<HTMLHRElement>, "children">;

export const Hr = styled.hr`
  border: none;
  border-top: ${({ vertical }: DividerProps) =>
    vertical ? "none" : "1px solid var(--outlineVariant)"};
  border-left: ${({ vertical }: DividerProps) =>
    vertical ? "1px solid var(--outlineVariant)" : "none"};
  margin: ${({ vertical }: DividerProps) => (vertical ? "0 8px" : "8px 0")};
`;

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  return <Hr ref={ref} {...props} />;
});
