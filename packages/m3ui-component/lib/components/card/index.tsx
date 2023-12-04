import { HTMLAttributes, forwardRef } from "react";
import { SHAPE } from "../../constant";

import styled from "@emotion/styled";

export enum CARD_SHAPE {
  OUTLINED = SHAPE.OUTLINED,
  ELEVATED = SHAPE.ELEVATED,
  FILLED = SHAPE.FILLED,
}

export type CardProps = {
  shape?: CARD_SHAPE;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

const BaseCard = styled.div<CardProps>`
  border-radius: 8px;
`;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ shape = CARD_SHAPE.OUTLINED, ...props }, ref) => {
    return <BaseCard ref={ref} shape={shape} {...props} />;
  }
);
