import styled from "@emotion/styled";
import { MaterialIcon } from "material-icons";
import { HTMLAttributes, forwardRef } from "react";
import { SHAPE } from "../../constant";

enum ICON_SHAPE {
  FILLED = SHAPE.FILLED,
  OUTLINED = SHAPE.OUTLINED,
  TEXT = SHAPE.TEXT,
  SHARP = "sharp",
  TWO_TONE = "two-tone",
}

const shapeIcons: { [key in ICON_SHAPE]: string } = {
  [ICON_SHAPE.FILLED]: "material-icons",
  [ICON_SHAPE.OUTLINED]: "material-icons-outlined",
  [ICON_SHAPE.TEXT]: "material-icons-round",
  [ICON_SHAPE.SHARP]: "material-icons-sharp",
  [ICON_SHAPE.TWO_TONE]: "material-icons-two-tone",
};

type IconOptionProps =
  | {
      icon: MaterialIcon;
      shape?: ICON_SHAPE;
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
    if (icon) {
      return (
        <span
          ref={ref}
          className={`${shapeIcons[shape]} ${className}`}
          {...props}
        >
          {icon}
        </span>
      );
    } else {
      return <CustomIcon ref={ref} iconUrl={iconUrl} {...props} />;
    }
  }
);
