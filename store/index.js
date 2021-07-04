import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunkMiddleware from "redux-thunk";
import Reducers from "./reducers";

const exampleInitialState = {
   users: [],
};

export function initializeStore(initialState = exampleInitialState) {
   return createStore(
      Reducers,
      initialState,
      composeWithDevTools(applyMiddleware(reduxThunkMiddleware))
   );
}
