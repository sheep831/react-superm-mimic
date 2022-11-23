import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { AddCartButton, Outside } from "../css/ProductList";
import productsData from "../data";
import { addProductToCart, deleteProductInCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import { Products } from "../utils/model";
import { RootState } from "../store";
import { ProductState } from "../redux/reducer";

export default function Product() {
// props: {onChange: () => void}
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Products[]>([]);

  const productsInCartArray = useSelector((state: RootState) => state.product);
  // const productsInCartArray:ProductState[] = JSON.parse(localStorage.getItem("cart")!);

  useEffect(() => {
    const data = productsData();
    setProduct(data);
  }, [setProduct]);

  const addProduct = (product: ProductState) => {
    dispatch(addProductToCart(product));
  };

  const deleteProduct = (productId: number) => {
    dispatch(deleteProductInCart(productId));
  };

  return (
    <Outside>
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="cardContainer">
        {product.map((product) => (
          <div className="card" key={product.id}>
            <div className="imageContainer">
              <NavLink to={`/product/${product.id}`} key={product.id}>
                <img
                  src={require(`../img/${product.image}`)}
                  width="100"
                  height="100"
                />
              </NavLink>

              {productsInCartArray.find((item) => item.id === product.id) && (
                <div className="product-quantity-container">
                  <div className="product-quantity">
                    {
                      productsInCartArray.filter(
                        (item) => item.id === product.id
                      )[0].quantity
                    }
                  </div>
                </div>
              )}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-checkout">
              {productsInCartArray.find((item) => item.id === product.id) && (
                <div>
                  <button
                    className="btn btn-out product-delete"
                    onClick={() => {
                      deleteProduct(product.id);
                      // props.onChange()
                    }}
                  >
                    x
                  </button>
                </div>
              )}
              <AddCartButton
                className="btn btn-outline"
                onClick={() => {
                  addProduct({ ...product, quantity: 1 });
                  // props.onChange()
                }}
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
