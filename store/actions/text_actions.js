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
} from "./actionTypes";

export const setStrokeState = (state) => {
   return {
      type: SET_STROKE,
      state: state,
   };
};

export const setFontSizeState = (state) => {
   return {
      type: SET_FONTSIZE,
      state: state,
   };
};

export const setLineHeightState = (state) => {
   return {
      type: SET_LINE_HEIGHT,
      state: state,
   };
};

export const setLineThroughState = (state) => {
   return {
      type: SET_LINE_THROUGH,
      state: state,
   };
};

export const setBoldState = (state) => {
   return {
      type: SET_BOLD,
      state: state,
   };
};

export const setItalicState = (state) => {
   return {
      type: SET_ITALIC,
      state: state,
   };
};

export const setUnderlineState = (state) => {
   return {
      type: SET_UNDERLINE,
      state: state,
   };
};

export const setOverlineState = (state) => {
   return {
      type: SET_OVERLINE,
      state: state,
   };
};

export const setBackgroundState = (state) => {
   return {
      type: SET_BACKGROUND,
      state: state,
   };
};

export const setDialogState = (state) => {
   return {
      type: SET_IS_DIALOG,
      state: state,
   };
};

export const setTypoState = (state) => {
   return {
      type: SET_IS_TYPO,
      state: state,
   };
};

export const setColorState = (state) => {
   return {
      type: SET_IS_COLOR,
      state: state,
   };
};

export const setFontFamilyState = (state) => {
   return {
      type: SET_FONT_FAMILY,
      state: state,
   };
};

export const setAlignmentCenterState = (state) => {
   return {
      type: SET_ALIGNMENT_CENTER,
      state: state,
   };
};

export const setAlignmentRightState = (state) => {
   return {
      type: SET_ALIGNMENT_RIGHT,
      state: state,
   };
};

export const setAlignmentLeftState = (state) => {
   return {
      type: SET_ALIGNMENT_LEFT,
      state: state,
   };
};

export const setAlignmentJustifyState = (state) => {
   return {
      type: SET_ALIGNMENT_JUSTIFY,
      state: state,
   };
};
