import { VARIANT } from "../constant/style.constant";
import { COLOR_DIVIERSION_TYPE } from "../core/theme-provider/theme-setting/color/color.constant";
import { kebabCaseToCamelCase } from "./string.util";

export const convertPxToRem = (px: number) =>
  px / parseFloat(getComputedStyle(document.documentElement).fontSize);
export const convertRemToPx = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

const tonalColors = [VARIANT.PRIMARY, VARIANT.SECONDARY, VARIANT.TERTIARY];
export const getTonalColor = (variant: VARIANT) => {
  if (tonalColors.includes(variant)) {
    const index = tonalColors.indexOf(variant);
    const tonalColor = tonalColors[(index + 1) % tonalColors.length];
    return tonalColor;
  }
  return VARIANT.ERROR;
};

export const getColorVariable = ({
  variant = VARIANT.PRIMARY,
  type = COLOR_DIVIERSION_TYPE.DEFAULT,
}: {
  variant?: VARIANT;
  type?: COLOR_DIVIERSION_TYPE;
}) => {
  switch (type) {
    case COLOR_DIVIERSION_TYPE.CONTAINER:
      return `var(--${variant}Container)`;
    case COLOR_DIVIERSION_TYPE.ON_CONTAINER:
      return `var(--${kebabCaseToCamelCase(`on-${variant}`)}Container)`;
    case COLOR_DIVIERSION_TYPE.FIXED:
      return `var(--${variant}Fixed)`;
    case COLOR_DIVIERSION_TYPE.ON_FIXED:
      return `var(--${kebabCaseToCamelCase(`on-${variant}`)}Fixed)`;
    case COLOR_DIVIERSION_TYPE.FIXED_DIM:
      return `var(--${variant}FixedDim)`;
    case COLOR_DIVIERSION_TYPE.ON_FIXED_VARIANT:
      return `var(--${kebabCaseToCamelCase(`on-${variant}`)}FixedVariant)`;
    case COLOR_DIVIERSION_TYPE.CONTAINER_LOWEST:
      return `var(--${variant}ContainerLowest)`;
    case COLOR_DIVIERSION_TYPE.CONTAINER_LOW:
      return `var(--${variant}ContainerLow)`;
    case COLOR_DIVIERSION_TYPE.CONTAINER_HIGH:
      return `var(--${variant}ContainerHigh)`;
    case COLOR_DIVIERSION_TYPE.CONTAINER_HIGHEST:
      return `var(--${variant}ContainerHighest)`;
    case COLOR_DIVIERSION_TYPE.ON_VARIANT:
      return `var(--${kebabCaseToCamelCase(`on-${variant}`)}Variant)`;
    case COLOR_DIVIERSION_TYPE.ON:
      return `var(--${kebabCaseToCamelCase(`on-${variant}`)})`;
    case COLOR_DIVIERSION_TYPE.INVERSE:
      return "var(--inverseSurface)";
    case COLOR_DIVIERSION_TYPE.INVERSE_ON:
      return "var(--inverseOnSurface)";
    case COLOR_DIVIERSION_TYPE.INVERSE_PRIMARY:
      return "var(--inversePrimary)";
    case COLOR_DIVIERSION_TYPE.DEFAULT:
    default:
      return `var(--${variant})`;
  }
};

export const mixColor = (color1: string, color2: string, weight: number) => {
  return `color-mix(in srgb, ${color1} ${weight}%, ${color2})`;
};

/**
 * @description
 * bind to mousedown event
 */
export const rippleEventFactory = (
  element: HTMLElement,
  classNamePrefix: string = ""
) => {
  const onMouseUpFactory = (ripple: HTMLSpanElement, callback: () => void) => {
    const onMouseUp = () => {
      callback();
      element.removeEventListener("mouseup", onMouseUp);
      element.removeEventListener("mouseleave", onMouseUp);
      ripple.classList.add(`${classNamePrefix}ripple-fade-out`);
      ripple.addEventListener("transitionend", () => {
        element.removeChild(ripple);
      });
    };
    return onMouseUp;
  };

  return (e) => {
    e.stopPropagation();
    const ripple = document.createElement("span");
    ripple.classList.add(`${classNamePrefix}ripple`);

    const x = e.clientX - element.offsetLeft;
    const y = e.clientY - element.offsetTop;

    const size = Math.max(element.clientWidth, element.clientHeight);
    const half = size / 2;
    const quarter = half / 2;

    ripple.style.width = `${half}px`;
    ripple.style.height = `${half}px`;
    ripple.style.marginTop = `-${quarter}px`;
    ripple.style.marginLeft = `-${quarter}px`;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    element.appendChild(ripple);

    const mousemove = (e) => {
      const x = e.clientX - element.offsetLeft;
      const y = e.clientY - element.offsetTop;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    };

    element.addEventListener("mousemove", mousemove);

    const mouseUp = onMouseUpFactory(ripple, () => {
      element.removeEventListener("mousemove", mousemove);
    });
    element.addEventListener("mouseup", mouseUp);
    element.addEventListener("mouseleave", mouseUp);

    setTimeout(() => {
      ripple.classList.add(`${classNamePrefix}ripple-scale`);
    }, 1);
  };
};
