import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProdectComponent from "./ProdectComponent";
import { setProducts } from "../redux/actions/productActions";

import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log('products:', products)
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("err:", err);
    });
    console.log("response:", response);
       dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container center">
      <ProdectComponent></ProdectComponent>
    </div>
  );
};

export default ProductListing;
