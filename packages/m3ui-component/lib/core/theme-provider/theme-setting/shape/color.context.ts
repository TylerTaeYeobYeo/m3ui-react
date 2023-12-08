import { createContext } from "react";
import { ShapeScale, defaultShapeScale } from "./shape.constant";

export type ShapeScaleContextType = {
  shapeScale?: ShapeScale;
};

export const ShapeScaleContext = createContext<ShapeScaleContextType>({
  shapeScale: defaultShapeScale,
});
