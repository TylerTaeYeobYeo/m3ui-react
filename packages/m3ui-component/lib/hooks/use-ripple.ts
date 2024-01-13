import { MutableRefObject, useEffect } from "react";

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
        // element.removeChild(ripple);
      });
    };
    return onMouseUp;
  };

  return (e) => {
    e.stopPropagation();
    const ripple = document.createElement("span");
    ripple.classList.add(`${classNamePrefix}ripple`);
    // const x = e.clientX - element.offsetLeft;
    // const y = e.clientY - element.offsetTop;
    const x = e.layerX;
    const y = e.layerY;

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

    // const mousemove = (e) => {
    //   const x = e.clientX - element.offsetLeft;
    //   const y = e.clientY - element.offsetTop;
    //   ripple.style.left = `${x}px`;
    //   ripple.style.top = `${y}px`;
    // };
    // element.addEventListener("mousemove", mousemove);
    const mouseUp = onMouseUpFactory(ripple, () => {
      // element.removeEventListener("mousemove", mousemove);
    });
    element.addEventListener("mouseup", mouseUp);
    element.addEventListener("mouseleave", mouseUp);

    setTimeout(() => {
      ripple.classList.add(`${classNamePrefix}ripple-scale`);
    }, 1);
  };
};

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
