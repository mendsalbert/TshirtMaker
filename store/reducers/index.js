import { combineReducers } from "redux";
import nav from "./navbar_reducer";
import index from "./index_reducer";
import text from "./text_reducer";
const rootReducer = combineReducers({
   nav,
   index,
   text,
});

export default rootReducer;
