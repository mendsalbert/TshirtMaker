import { fabric } from "fabric";
import { LOAD_CANVAS_OBJECT, LOAD_CANVAS_REF } from "./actionTypes";

//initiate canvas
export const loadCanvasObject = () => {
   const initCanvas = () => new fabric.Canvas("canvas");
   return {
      type: LOAD_CANVAS_OBJECT,
      canvas: initCanvas(),
   };
};

//load canvas Ref
export const loadCanvasRef = (ref) => {
   return {
      type: LOAD_CANVAS_REF,
      canvasRef: ref,
   };
};
