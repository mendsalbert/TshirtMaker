import { fabric } from "fabric";
import {
   LOAD_CANVAS_OBJECT,
   LOAD_CANVAS_REF,
   LOAD_CANVAS_BACK,
   LOAD_CANVAS_BACK_REF,
} from "./actionTypes";

//initiate canvas
export const loadCanvasObject = () => {
   const initCanvas = () => new fabric.Canvas("canvas");
   return {
      type: LOAD_CANVAS_OBJECT,
      canvas: initCanvas(),
   };
};

//initiate the back of a canvas
export const loadCanvasBack = () => {
   const initCanvasBack = () => new fabric.Canvas("canvas2");

   return {
      type: LOAD_CANVAS_BACK,
      canvasBack: initCanvasBack(),
   };
};

//load canvasBack ref
export const loadCanvasBackRef = (ref) => {
   return {
      type: LOAD_CANVAS_BACK_REF,
      canvasBackRef: ref,
   };
};

//load canvas Ref
export const loadCanvasRef = (ref) => {
   return {
      type: LOAD_CANVAS_REF,
      canvasRef: ref,
   };
};
