import { createElement } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.width = "100vw";
document.body.style.height = "100vh";

const wrapperElement: HTMLDivElement = document.createElement("div");
wrapperElement.style.width = "100%";
wrapperElement.style.height = "100%";

document.body.appendChild(wrapperElement);
const root = createRoot(wrapperElement);

root.render(createElement(App));
