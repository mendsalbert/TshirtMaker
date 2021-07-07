import { combineReducers } from "redux";
import nav from "./navbar_reducer";
import index from "./index_reducer";
import text from "./text_reducer";
import tool from "./tool_reducer";
const rootReducer = combineReducers({
   nav,
   index,
   text,
   tool,
});

export default rootReducer;
