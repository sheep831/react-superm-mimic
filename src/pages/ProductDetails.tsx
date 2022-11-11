import React from "react";
import productsData from "../data";
import { NavLink, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams<{ id: string }>();
  //params.id
  let id = 2;
  const data = productsData();
  const product = data.find((product) => product.id === id);

  return (
    <div>
      <div className="image-holder">
        <h2>{product!.name}</h2>
        <img
          src={require(`../img/${product!.image}`)}
          width="100"
          height="100"
        />
      </div>
      <div>
        <div>
          <ul>
            <li><NavLink to="/products/${product.id}">Details</NavLink></li>
            <li><NavLink to="/products/${product.id}/nutrition">Nutrition</NavLink></li>
            <li><NavLink to="/products/${product.id/storage">Storage</NavLink></li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}
