import { LOAD_CANVAS_OBJECT, LOAD_CANVAS_REF } from "../actions/actionTypes";
const initialState = {
   canvas: {},
   canvasRef: {},
};

export default function (state = initialState, action) {
   switch (action.type) {
      case LOAD_CANVAS_OBJECT:
         return {
            ...state,
            canvas: action.canvas,
         };
      case LOAD_CANVAS_REF:
         return {
            ...state,
            canvasRef: action.canvasRef,
         };

      default:
         return state;
   }
}
