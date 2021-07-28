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
   // console.log(initCanvas());
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
