import styled from "@emotion/styled";
import { MaterialIcon } from "material-icons";
import { MaterialSymbol } from "material-symbols";
import { HTMLAttributes, forwardRef } from "react";
import { SHAPE } from "../../constant";
import { useTheme } from "../../core/theme-provider/hook";

export enum ICON_SHAPE {
  FILLED = SHAPE.FILLED,
  OUTLINED = SHAPE.OUTLINED,
  ROUNDED = "rounded",
  SHARP = "sharp",
  TWO_TONE = "two-tone",
}

export const ICON_SHAPE_CLASSNAME: { [key in ICON_SHAPE]: string } = {
  [ICON_SHAPE.FILLED]: "material-icons",
  [ICON_SHAPE.OUTLINED]: "material-symbols-outlined",
  [ICON_SHAPE.ROUNDED]: "material-symbols-rounded",
  [ICON_SHAPE.SHARP]: "material-symbols-sharp",
  [ICON_SHAPE.TWO_TONE]: "material-icons-two-tone",
} as const;

type IconOptionProps =
  | {
      icon: MaterialSymbol;
      shape?: Omit<ICON_SHAPE, ICON_SHAPE.FILLED | ICON_SHAPE.TWO_TONE>;
      iconUrl?: never;
    }
  | {
      icon: MaterialIcon;
      shape?: Omit<
        ICON_SHAPE,
        ICON_SHAPE.OUTLINED | ICON_SHAPE.ROUNDED | ICON_SHAPE.SHARP
      >;
      iconUrl?: never;
    }
  | {
      icon?: never;
      shape?: never;
      iconUrl: string;
    };

export type IconProps = IconOptionProps &
  Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export const CustomIcon = styled.span(({ iconUrl, style }: IconProps) => ({
  backgroundImage: `url(${iconUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "inline-block",
  width: "24px",
  height: "24px",
  ...(style ?? {}),
}));

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ icon, shape = ICON_SHAPE.FILLED, iconUrl, className, ...props }, ref) => {
    const { classNamePrefix } = useTheme();
    const commonProps = {
      ref,
      className: `${classNamePrefix}icon ${
        // @ts-ignore
        ICON_SHAPE_CLASSNAME[shape]
      } ${className ?? ""}`,
      ...props,
    };
    if (icon) {
      return <span {...commonProps}>{icon}</span>;
    } else {
      return <CustomIcon iconUrl={iconUrl} {...commonProps} />;
    }
  }
);
