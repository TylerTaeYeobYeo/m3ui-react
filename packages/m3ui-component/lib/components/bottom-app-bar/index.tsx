import styled from "@emotion/styled";
import { HTMLAttributes, forwardRef } from "react";
import { FloatingActionButtonProps } from "../floating-action-button";

export type BottomAppBarProps = {
  floatingActionButton?: FloatingActionButtonProps;
} & HTMLAttributes<HTMLDivElement>;

const BaseBottomAppBar = styled.div``;

export const BottomAppBar = forwardRef<HTMLDivElement, BottomAppBarProps>(
  (props, ref) => {
    return <BaseBottomAppBar ref={ref} {...props} />;
  }
);
