import React, { useEffect } from "react";
import { fetchProducts } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => console.log(error));
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products, 'products')
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
