import { actionTypes } from "../constants/actionTypes";
import fakeStoreApis from "../../apis/fakeStoreApis";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreApis.get("/products");
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await fakeStoreApis.get(`/products/${id}`);
    dispatch({ type: actionTypes.SELECTED_PRODUCTS, payload: response.data });
  };
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
