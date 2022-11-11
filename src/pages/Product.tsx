import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCartButton, Outside } from "../css/ProductList";
import productsData from "../data";
import { addProductToCart, deleteProductInCart } from "../redux/action";
import { NavLink, Outlet } from "react-router-dom";
import { Products } from "../utils/model";

export default function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    const data = productsData();
    setProduct(data);
  }, [setProduct]);

  // const addProduct = () => {
  //   dispatch(addProductToCart(product));
  // };

  // const deleteProduct = () => {
  //   dispatch(deleteProductInCart(product.id));
  // };

  return (
    <Outside>
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="cardContainer">

        {product.map((product) => (
          <div className="card" key={product.id}>
            <div className="imageContainer">
            <NavLink to={`/product/${product.id}`} key={product.id}><img
                src={require(`../img/${product.image}`)}
                width="100"
                height="100"
              /></NavLink>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-checkout">
              <AddCartButton
                className="btn btn-outline"
                //  onClick={addProduct}
              >
                ${product.price}
              </AddCartButton>
            </div>
          </div>
        ))}

      </div>
      
    </Outside>

  );
}
