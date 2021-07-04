import {
   SET_ALIGNMENT_CENTER,
   SET_STROKE,
   SET_FONTSIZE,
   SET_UNDERLINE,
   SET_BOLD,
   SET_ITALIC,
   SET_LINE_HEIGHT,
   SET_LINE_THROUGH,
   SET_OVERLINE,
   SET_BACKGROUND,
   SET_IS_DIALOG,
   SET_IS_TYPO,
   SET_IS_COLOR,
   SET_FONT_FAMILY,
   SET_ALIGNMENT_RIGHT,
   SET_ALIGNMENT_LEFT,
   SET_ALIGNMENT_JUSTIFY,
} from "../actions/actionTypes";

const initialState = {
   stroke: 1,
   fontSize: 12,
   lineHeight: 1,
   bold: false,
   italic: false,
   underline: false,
   linethrough: false,
   overline: false,
   background: "#fff",
   isDialog: false,
   isTypo: false,
   isColor: false,
   fontFamily: "Arial",
   alRight: false,
   alJustify: false,
   alCenter: false,
   alLeft: false,
};

export default function (state = initialState, action) {
   switch (action.type) {
      case "":
         return {
            ...state,
            elementToggle: action.state,
         };
      default:
         return state;
   }
}
