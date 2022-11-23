import React from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { ProductButton } from "../css/HomeStyle";
import { addProductToCart } from "../redux/action";
import { Products } from "../utils/model";

export default function ProductRealDetails(props: {product: Products}) {
  const dispatch = useDispatch();
  
  const addProduct = (product: Products) => {
    dispatch(addProductToCart({...product, quantity: 1}));
  };

  return (
    <>
      <p>
        {props.product.detail} <b>${props.product.price}</b> per price
      </p>
      <ProductButton onClick={() => addProduct(props.product)}>${props.product.price}</ProductButton>
    </>
  );
}
