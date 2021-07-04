import {
   SET_ELEMENT_TOGGLE,
   SET_DISPLAY_MENU,
   SET_TEXT_TOGGLE,
   SET_TOOL_TOGGLE,
   SET_UPLOAD_TOGGLE,
   SET_TEMPLATE_TOGGLE,
} from "./actionTypes";

//toggle between the display of element item in sidebar
export const setElementToggle = (state) => {
   return {
      type: SET_ELEMENT_TOGGLE,
      state: state,
   };
};

//toggle between the display of tool item in sidebar
export const setToolToggle = (state) => {
   return {
      type: SET_TOOL_TOGGLE,
      state: state,
   };
};

//toggle between the display of template item in sidebar
export const setTemplateToggle = (state) => {
   return {
      type: SET_TEMPLATE_TOGGLE,
      state: state,
   };
};

//toggle between the display of upload item in sidebar
export const setUploadToggle = (state) => {
   return {
      type: SET_UPLOAD_TOGGLE,
      state: state,
   };
};

//toggle between the display of Menu items in sidebar
export const setDisplayToggle = (state) => {
   return {
      type: SET_DISPLAY_MENU,
      state: state,
   };
};

//toggle between the display of element item in sidebar
export const setTextToggle = (state) => {
   return {
      type: SET_TEXT_TOGGLE,
      state: state,
   };
};
