import styled from "@emotion/styled";
import { MaterialSymbol } from "material-symbols";
import { HTMLAttributes, forwardRef } from "react";
import { SHAPE, VARIANT } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";
import { getColorVariable } from "../../utils/style.util";

export enum ICON_SHAPE {
  OUTLINED = SHAPE.OUTLINED,
  ROUNDED = "rounded",
  SHARP = "sharp",
}

export const ICON_SHAPE_CLASSNAME: { [key in ICON_SHAPE]: string } = {
  [ICON_SHAPE.OUTLINED]: "material-symbols-outlined",
  [ICON_SHAPE.ROUNDED]: "material-symbols-rounded",
  [ICON_SHAPE.SHARP]: "material-symbols-sharp",
} as const;

type IconOptionProps =
  | {
      icon: MaterialSymbol;
      iconUrl?: never;
    }
  | {
      icon?: never;
      iconUrl: string;
    };

export type IconProps = {
  variant?: VARIANT;
  shape?: ICON_SHAPE;
  filled?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -25 | 0 | 200;
  opticalSize?: 20 | 24 | 40 | 48;
} & IconOptionProps &
  Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export const CustomIcon = styled.span(({ iconUrl, style }: IconProps) => ({
  backgroundImage: `url(${iconUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "inline-block",
  fontSize: "24px",
  width: "24px",
  height: "24px",
  ...(style ?? {}),
}));

export const BaseIcon = styled.span<Omit<IconProps, "iconUrl">>`
  color: ${({ variant }) =>
    variant
      ? getColorVariable({
          variant,
        })
      : "inherit"};
  font-size: 24px;
  width: 24px;
  height: 24px;
  font-variation-settings: ${({
    filled = false,
    weight = 400,
    grade = 0,
    opticalSize = 24,
  }) =>
    `"FILL" ${
      filled ? 1 : 0
    }, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${opticalSize}`};
`;

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    { icon, shape = ICON_SHAPE.OUTLINED, iconUrl, className, ...props },
    ref
  ) => {
    const { classNamePrefix } = useTheme();
    const commonProps = {
      ref,
      className: `${classNamePrefix}icon ${ICON_SHAPE_CLASSNAME[shape]} ${
        className ?? ""
      }`,
      ...props,
    };
    if (icon) {
      return <BaseIcon {...commonProps}>{icon}</BaseIcon>;
    } else {
      return <CustomIcon iconUrl={iconUrl} {...commonProps} />;
    }
  }
);
