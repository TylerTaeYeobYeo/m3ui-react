import { MutableRefObject, useEffect } from "react";
import { rippleEventFactory } from "../utils/style.util";

/**
 * @description use ripple effect on HtmlElement
 * beware: the element should have following style
 * - position: relative
 * - overflow: hidden
 * @param {MutableRefObject<HTMLElement | undefined>} element - use useRef object to element
 * @param {boolean} rippleEffect - toggle ripple effect
 */
export const useRipple = (
  elementRef: MutableRefObject<HTMLElement | undefined>,
  rippleEffect: boolean = true
) => {
  useEffect(() => {
    if (!rippleEffect) return;
    const element = elementRef.current;
    if (!element) return;
    const rippleEvent = rippleEventFactory(element);
    element.addEventListener("mousedown", rippleEvent);

    return () => {
      element.removeEventListener("mousedown", rippleEvent);
    };
  }, [rippleEffect]);
};
