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
      case SET_STROKE:
         return {
            ...state,
            stroke: action.state,
         };
      case SET_FONTSIZE:
         return {
            ...state,
            fontSize: action.state,
         };
      case SET_LINE_HEIGHT:
         return {
            ...state,
            lineHeight: action.state,
         };
      case SET_LINE_THROUGH:
         return {
            ...state,
            linethrough: action.state,
         };
      case SET_BOLD:
         return {
            ...state,
            bold: action.state,
         };
      case SET_ITALIC:
         return {
            ...state,
            italic: action.state,
         };
      case SET_UNDERLINE:
         return {
            ...state,
            underline: action.state,
         };
      case SET_OVERLINE:
         return {
            ...state,
            overline: action.state,
         };
      case SET_BACKGROUND:
         return {
            ...state,
            background: action.state,
         };
      case SET_IS_DIALOG:
         return {
            ...state,
            isDialog: action.state,
         };
      case SET_IS_TYPO:
         return {
            ...state,
            isTypo: action.state,
         };
      case SET_IS_COLOR:
         return {
            ...state,
            isColor: action.state,
         };
      case SET_FONT_FAMILY:
         return {
            ...state,
            fontFamily: action.state,
         };

      case SET_ALIGNMENT_CENTER:
         return {
            ...state,
            alCenter: action.state,
         };

      case SET_ALIGNMENT_JUSTIFY:
         return {
            ...state,
            alJustify: action.state,
         };

      case SET_ALIGNMENT_RIGHT:
         return {
            ...state,
            alRight: action.state,
         };

      case SET_ALIGNMENT_LEFT:
         return {
            ...state,
            alLeft: action.state,
         };
      default:
         return state;
   }
}
