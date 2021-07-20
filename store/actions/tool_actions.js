import {
   SET_STROKE,
   CHANGE_COLOR,
   STROKE_WIDTH,
   STROKE_COLOR,
   STROKE,
   SET_CURRENT_COLOR,
   IS_DIALOG,
} from "./actionTypes";

export const changeCurrentColor = (e) => {
   return {
      type: SET_CURRENT_COLOR,
      value: e,
   };
};

export const setIsDialog = (value) => {
   return {
      type: IS_DIALOG,
      value: value,
   };
};

export const setStroke = (e) => {
   return {
      type: SET_STROKE,
      value: e,
   };
};
