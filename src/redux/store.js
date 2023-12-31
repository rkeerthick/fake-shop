import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducers from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
