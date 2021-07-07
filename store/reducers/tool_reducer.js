import {
   SET_STROKE,
   CHANGE_COLOR,
   STROKE,
   STROKE_COLOR,
   STROKE_WIDTH,
   SET_CURRENT_COLOR,
} from "../actions/actionTypes";

const initialState = {
   current: "black",
};

export default function (state = initialState, action) {
   switch (action.type) {
      case SET_CURRENT_COLOR:
         return {
            ...state,
            current: action.value,
         };
      default:
         return state;
   }
}
