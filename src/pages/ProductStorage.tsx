import React from "react";
import { useOutletContext } from "react-router-dom";
import { Products } from "../utils/model"

export default function ProductStorage() {
  const context : Products = useOutletContext();
  return (
    <>
      <p>
        <strong>Storage instructions:</strong>
        {context.storage}
      </p>
    </>
  );
}
