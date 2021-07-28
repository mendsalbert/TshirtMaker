import {
   LOAD_CANVAS_BACK,
   LOAD_CANVAS_BACK_REF,
   LOAD_CANVAS_OBJECT,
   LOAD_CANVAS_REF,
} from "../actions/actionTypes";
const initialState = {
   canvas: {},
   canvasRef: {},
   canvasBack: {},
   canvasBackRef: {},
   isBack: true,
};

export default function (state = initialState, action) {
   switch (action.type) {
      case LOAD_CANVAS_OBJECT:
      console.log('action.canvas');
         return {
            ...state,
            canvas: action.canvas,
         };
      case LOAD_CANVAS_REF:
         return {
            ...state,
            canvasRef: action.canvasRef,
         };

      case LOAD_CANVAS_BACK:
         return {
            ...state,
            canvasBack: action.canvasBack,
         };
      case LOAD_CANVAS_BACK_REF:
         return {
            ...state,
            canvasBackRef: action.canvasBackRef,
         };

      default:
         return state;
   }
}
