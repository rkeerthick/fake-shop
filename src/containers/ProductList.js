import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log(error));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products, 'products')
  return (
    <div className="ui grid">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
