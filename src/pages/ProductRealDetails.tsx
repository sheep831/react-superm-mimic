import React from "react";
import { useOutletContext } from "react-router-dom";
import { ProductButton } from "../css/HomeStyle";
import { Products } from "../utils/model";

export default function ProductRealDetails(props: {price: number, detail: string}) {
  return (
    <>
      <p>
        {props.detail} <b>${props.price}</b> per price
      </p>
      <ProductButton>${props.price}</ProductButton>
    </>
  );
}
