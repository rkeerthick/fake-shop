import { combineReducers } from "redux";
import productReducer, { selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
  product: selectedProductReducer
});

export default rootReducer;