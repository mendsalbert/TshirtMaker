import {
   SET_DISPLAY_MENU,
   SET_ELEMENT_TOGGLE,
   SET_TEMPLATE_TOGGLE,
   SET_TEXT_TOGGLE,
   SET_TOOL_TOGGLE,
   SET_UPLOAD_TOGGLE,
} from "../actions/actionTypes";

const initialState = {
   elementToggle: false,
   toolToggle: false,
   templateToggle: false,
   uploadToggle: false,
   displayMenu: false,
   textToggle: false,
};

export default function (state = initialState, action) {
   switch (action.type) {
      case SET_ELEMENT_TOGGLE:
         return {
            ...state,
            elementToggle: action.state,
         };
      case SET_TOOL_TOGGLE:
         return {
            ...state,
            toolToggle: action.state,
         };
      case SET_TEMPLATE_TOGGLE:
         return {
            ...state,
            templateToggle: action.state,
         };
      case SET_UPLOAD_TOGGLE:
         return {
            ...state,
            uploadToggle: action.state,
         };
      case SET_DISPLAY_MENU:
         return {
            ...state,
            displayMenu: action.state,
         };
      case SET_TEXT_TOGGLE:
         return {
            ...state,
            textToggle: action.state,
         };
      default:
         return state;
   }
}
