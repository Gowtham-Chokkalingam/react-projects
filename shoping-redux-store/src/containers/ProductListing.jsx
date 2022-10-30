import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProdectComponent from "./ProdectComponent";
import { fetchProducts } from "../redux/actions/productActions";


const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log("products:", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="ui grid container center">
      <ProdectComponent></ProdectComponent>
    </div>
  );
};

export default ProductListing;
