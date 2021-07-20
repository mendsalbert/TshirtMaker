import {
   SET_STROKE,
   CHANGE_COLOR,
   STROKE,
   STROKE_COLOR,
   STROKE_WIDTH,
   SET_CURRENT_COLOR,
   IS_DIALOG,
} from "../actions/actionTypes";

const initialState = {
   current: "black",
   isDialog: false,
   strokeValue: "",
};

export default function (state = initialState, action) {
   switch (action.type) {
      case SET_CURRENT_COLOR:
         return {
            ...state,
            current: action.value,
         };
      case IS_DIALOG:
         return {
            ...state,
            isDialog: action.value,
         };
      case SET_STROKE:
         console.log(action.value);
         return {
            ...state,
            strokeValue: action.value,
         };
      default:
         return state;
   }
}
