import {
   SET_STROKE,
   CHANGE_COLOR,
   STROKE_WIDTH,
   STROKE_COLOR,
   STROKE,
   SET_CURRENT_COLOR,
} from "./actionTypes";

export const changeCurrentColor = (e) => {
   return {
      type: SET_CURRENT_COLOR,
      value: e,
   };
};
