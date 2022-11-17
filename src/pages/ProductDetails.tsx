import React, { useState } from "react";
import productsData from "../data";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { ProductButton } from "../css/HomeStyle";
import { Container } from "../css/ProductDetails";
import ProductRealDetails from "./ProductRealDetails";

export default function ProductDetails() {
  const params = useParams<{ id: string }>();
  let id = parseInt(params.id!);
  const data = productsData();
  const product = data.find((product) => product.id == id);
  const [showDetails, setShowDetails] = useState(false);

  function closeDetails() {
    setShowDetails(false);
  }

  return (
    <Container>
      <div className="product-details-layout">
        <div className="image-holder">
          <h2>{product!.name}</h2>
          <img
            className="product-details-image"
            src={require(`../img/${product!.image}`)}
            width="125"
            height="125"
          />
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li onClick={() => setShowDetails(true)}>
                <NavLink to={`/product/${product!.id}`}>Details</NavLink>
              </li>
              <li onClick={closeDetails}>
                <NavLink to={`/product/${product!.id}/nutrition`}>
                  Nutrition
                </NavLink>
              </li>
              <li onClick={closeDetails}>
                <NavLink to={`/product/${product!.id}/storage`}>
                  Storage
                </NavLink>
              </li>
            </ul>
          </div>
          {showDetails && (
            <ProductRealDetails
              product={product!}
            />
          )}
          <Outlet
            context={{
              storage: product?.storage,
              nutrition: product?.nutrition,
            }}
          />
        </div>
      </div>
    </Container>
  );
}
